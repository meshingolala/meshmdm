# Mesh MDM

<div align="center">
  <h3>Next-Generation Endpoint Security & Intelligent Device Management</h3>
  <p>Autonomous AI Scripting · Zero-Trust Host Quarantine · P2P Telemetry · Multi-OS Support</p>
</div>

---

## 🚀 Overview

**Mesh MDM** is an open, cross-platform Mobile Device Management (MDM) and endpoint observability system. It provides real-time visibility, automated remediation, zero-trust network quarantine, and peer-to-peer package distribution for thousands of endpoints across Windows, macOS, and Linux.

---

## ✨ Key Features

- 🤖 **AI-Assisted Script Generator**: Natural-language generation of Bash & PowerShell administration scripts with built-in heuristic safety sandboxing.
- 🛡️ **Zero-Trust Host Quarantine**: One-click immediate network isolation of compromised or non-compliant devices while keeping secure MDM telemetry alive.
- ⚡ **Mesh P2P Package Swarms**: Distributed package caching and deployment dashboard tracking WAN bandwidth savings and peer swarms.
- 📦 **Multi-Cloud & Container Ready**: 1-click deployments for **Kubernetes (K8s)**, **Docker Compose**, **Linux Systemd**, and **Windows MSI**.
- 🔍 **Real-Time Osquery Diagnostics**: Comprehensive hardware, software, user, and security audit querying across all devices.

---

## ⚡ Quick Start

### 1. Docker Compose (Fastest)

```bash
git clone https://github.com/meshingolala/meshmdm.git
cd meshmdm
docker compose up -d
```
Access the web dashboard at `http://localhost:8080`.

### 2. Kubernetes (K8s)

```bash
kubectl apply -f https://raw.githubusercontent.com/meshingolala/meshmdm/main/k8s/meshmdm.yaml
```

### 3. Linux Host (Systemd)

```bash
git clone https://github.com/meshingolala/meshmdm.git
cd meshmdm
sudo chmod +x install-linux.sh
sudo ./install-linux.sh
sudo systemctl start meshmdm
```

---

## 📚 Full Documentation

For architecture deep-dives, API specifications, development guides, and configuration options, see:
👉 **[Full Documentation (DOCUMENTATION.md)](DOCUMENTATION.md)**

---

## 🛠️ Tech Stack

- **Server**: Go (Golang)
- **Frontend**: React 18, TypeScript, SCSS
- **Storage**: MySQL 8.0+, Redis 7.0+
- **Protocols**: Osquery extensions, Apple MDM, Windows Wstep / MS-MDM

---

## 📄 License

Available under the MIT License. See [LICENSE](LICENSE) for details.
