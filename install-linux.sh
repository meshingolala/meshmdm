#!/usr/bin/env bash
# ==============================================================================
# Mesh MDM - Automated Linux Installation & Systemd Service Setup
# ==============================================================================
set -euo pipefail

echo "=========================================="
echo "    Installing Mesh MDM for Linux         "
echo "=========================================="

# 1. Check Root Privileges
if [[ $EUID -ne 0 ]]; then
   echo "[-] Error: This script must be run as root (use sudo)." 
   exit 1
fi

INSTALL_DIR="/opt/meshmdm"
BIN_DIR="/usr/local/bin"
SERVICE_FILE="/etc/systemd/system/meshmdm.service"
CONFIG_DIR="/etc/meshmdm"

echo "[+] Creating directories..."
mkdir -p "${INSTALL_DIR}" "${CONFIG_DIR}"

# 2. Copy or Download Binaries
if [[ -f "./build/linux/meshmdm" ]]; then
    echo "[+] Installing locally built Linux binary..."
    cp "./build/linux/meshmdm" "${BIN_DIR}/meshmdm"
    chmod +x "${BIN_DIR}/meshmdm"
    if [[ -f "./build/linux/meshmdmctl" ]]; then
        cp "./build/linux/meshmdmctl" "${BIN_DIR}/meshmdmctl"
        chmod +x "${BIN_DIR}/meshmdmctl"
    fi
elif command -v curl >/dev/null 2>&1; then
    echo "[+] Detecting system architecture..."
    ARCH=$(uname -m)
    echo "[+] System architecture: ${ARCH}"
    # If downloading from GitHub release in the future
fi

# 3. Create Default Configuration
if [[ ! -f "${CONFIG_DIR}/config.yml" ]]; then
    echo "[+] Generating default Mesh MDM config at ${CONFIG_DIR}/config.yml..."
    cat << 'EOF' > "${CONFIG_DIR}/config.yml"
server:
  address: 0.0.0.0:8080
  tls: false
mysql:
  address: 127.0.0.1:3306
  database: meshmdm
  username: meshmdm
  password: meshmdmpassword
redis:
  address: 127.0.0.1:6379
EOF
fi

# 4. Create Systemd Service
echo "[+] Creating systemd service unit: ${SERVICE_FILE}..."
cat << EOF > "${SERVICE_FILE}"
[Unit]
Description=Mesh MDM Central Management Platform
After=network.target mysql.service redis.service

[Service]
Type=simple
User=root
WorkingDirectory=${INSTALL_DIR}
ExecStart=${BIN_DIR}/meshmdm serve --config ${CONFIG_DIR}/config.yml
Restart=always
RestartSec=5s
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF

# 5. Reload systemd daemon
echo "[+] Enabling Mesh MDM service..."
systemctl daemon-reload || true
systemctl enable meshmdm.service || true

echo "========================================================"
echo " [✓] Mesh MDM successfully installed!"
echo " Binaries: ${BIN_DIR}/meshmdm, ${BIN_DIR}/meshmdmctl"
echo " Config:   ${CONFIG_DIR}/config.yml"
echo " Service:  systemctl start meshmdm"
echo " Logs:     journalctl -u meshmdm -f"
echo "========================================================"
