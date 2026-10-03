<#
.SYNOPSIS
    Mesh MDM - High-Speed Local LAN P2P Update Seeder Service
.DESCRIPTION
    Runs on a designated LAN machine to stream cached Microsoft Update (.msu)
    packages to other domain peers on the same subnet at wire speed (100–1000 Mbps),
    bypassing WAN bottlenecks and WSUS redirectors.
#>

param(
    [int]$Port = 8888,
    [string]$CacheDir = "C:\ProgramData\MeshMDM\Updates",
    [string]$MeshServerUrl = "https://mdm.meshtech.cloud"
)

$ErrorActionPreference = "Continue"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  Mesh MDM: Local LAN P2P Update Seeder Service          " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Ensure Cache Directory Exists
if (-not (Test-Path $CacheDir)) {
    New-Item -ItemType Directory -Path $CacheDir -Force | Out-Null
    Write-Host "[INIT] Created cache directory: $CacheDir" -ForegroundColor Green
}

# 2. Configure Windows Firewall
Write-Host "[FIREWALL] Ensuring inbound TCP port $Port is allowed..." -ForegroundColor Cyan
try {
    $existing = Get-NetFirewallRule -DisplayName "MeshMDM-P2P-Seeder-$Port" -ErrorAction SilentlyContinue
    if (-not $existing) {
        New-NetFirewallRule -DisplayName "MeshMDM-P2P-Seeder-$Port" -Direction Inbound -LocalPort $Port -Protocol TCP -Action Allow | Out-Null
        Write-Host "  Firewall rule created for port $Port." -ForegroundColor Green
    } else {
        Write-Host "  Firewall rule already active." -ForegroundColor Green
    }
} catch {
    Write-Warning "Could not configure firewall automatically: $_"
}

# 3. Discover Local Primary IP
$localIP = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*" } | Select-Object -First 1).IPAddress
Write-Host "[NETWORK] Local Seeder IP: $localIP on port $Port" -ForegroundColor Cyan

# 4. Start HTTP Streaming Listener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://*:$Port/")
try {
    $listener.Start()
    Write-Host "[RUNNING] Mesh P2P Seeder listening on http://0.0.0.0:$Port/" -ForegroundColor Green
    Write-Host "  - Health check: http://$localIP`:$Port/status"
    Write-Host "  - Package stream: http://$localIP`:$Port/update.msu"
} catch {
    Write-Error "Failed to bind HTTP listener on port $Port: $_"
    Exit 1
}

Write-Host "`nWaiting for peer connection requests (Press Ctrl+C to stop)..." -ForegroundColor Yellow

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath.ToLower()

        if ($path -eq "/status") {
            $files = Get-ChildItem -Path $CacheDir -Filter "*.msu" -ErrorAction SilentlyContinue
            $statusObj = @{
                status = "online"
                seeder_ip = $localIP
                port = $Port
                cached_packages = @($files | ForEach-Object { @{ name = $_.Name; size_mb = [math]::Round($_.Length / 1MB, 2) } })
            }
            $json = $statusObj | ConvertTo-Json -Compress
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($json)
            $response.ContentType = "application/json"
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.Close()
            continue
        }

        # Resolve requested file: either direct /update.msu or specific filename
        $targetFile = Join-Path $CacheDir "windows11.0-kb5124010-x64.msu"
        if ($path -ne "/update.msu") {
            $requestedName = [System.IO.Path]::GetFileName($request.Url.LocalPath)
            $candidate = Join-Path $CacheDir $requestedName
            if (Test-Path $candidate) {
                $targetFile = $candidate
            }
        }

        if (Test-Path $targetFile) {
            $fileInfo = Get-Item $targetFile
            $sizeMB = [math]::Round($fileInfo.Length / 1MB, 2)
            Write-Host "[STREAM] $($request.RemoteEndPoint.Address) requested $($fileInfo.Name) ($sizeMB MB)" -ForegroundColor Cyan
            
            $response.ContentType = "application/octet-stream"
            $response.ContentLength64 = $fileInfo.Length
            $response.AddHeader("Content-Disposition", "attachment; filename=$($fileInfo.Name)")

            $stream = [System.IO.File]::OpenRead($targetFile)
            $copyBuffer = New-Object byte[] 65536
            $bytesRead = 0
            while (($bytesRead = $stream.Read($copyBuffer, 0, $copyBuffer.Length)) -gt 0) {
                $response.OutputStream.Write($copyBuffer, 0, $bytesRead)
            }
            $stream.Close()
            $response.Close()
            Write-Host "[SUCCESS] Finished streaming to $($request.RemoteEndPoint.Address)" -ForegroundColor Green
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("Package not found in seeder cache.")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
            $response.Close()
        }
    } catch {
        Write-Warning "Error processing peer request: $_"
    }
}
