# License and Provenance Audit: meshmdm Fork

- **Base Project**: Fleet Device Management ([fleetdm/fleet](https://github.com/fleetdm/fleet))
- **Reference Commit**: `89d1161c56299ccd5c2b647cedce7d820ea6fd07`
- **Fork Model**: Track A — Licensed Enterprise Edition (EE) Fork
- **Fork Application Name**: `meshmdm`

---

## 1. Licensing Architecture

The repository operates under a dual/mixed-license structure:

1. **Root MIT License (`LICENSE`)**:
   - Covers core server functionality, database schemas, osquery integration modules, CLI foundation, and all client-side web assets (JS, CSS, static images, fonts).
   - Allows modification, rebranding, and distribution with copyright and permission notice preservation.

2. **Enterprise Edition License (`ee/LICENSE`)**:
   - Covers enterprise backend extensions (`ee/server/`, `ee/fleetctl/`, advanced features like RBAC enforcement, team scoping, custom tables, conditional access, and automated migrations).
   - Permits modification and private development/testing without restriction.
   - For production deployment with EE features active, requires compliance with terms and a valid license key configured via `FLEET_LICENSE_KEY`.
   - Client-side assets served from `ee/` are explicitly assigned to MIT under clause 2 of the EE license.

3. **Documentation License**:
   - Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0).

---

## 2. Track A Compliance & Notice Preservation

In accordance with Section 1 and Section 10 of `FLEET_FORK_BUILD_GUIDE.md`:
- All upstream copyright notices and licenses (`LICENSE`, `ee/LICENSE`, file headers) are strictly preserved.
- License validation logic in `ee/server/licensing/` remains intact and unmodified.
- For local testing and development, `--dev_license` or development environment configurations can be used.
- For production deployments of `meshmdm`, a valid subscription key must be injected via secret management (`FLEET_LICENSE_KEY`).

---

## 3. Component Inventory & Provenance

| Component | Path | License Class | Distribution Notes |
|---|---|---|---|
| Server Core & API | `server/`, `cmd/fleet/` | MIT | Rebranded entry points; MIT notices preserved |
| CLI Client | `cmd/fleetctl/` | MIT / EE wrapper | Rebranded `meshmdmctl` / `fleetctl` compatibility |
| Frontend Assets | `frontend/`, `assets/` | MIT | Bundled via Webpack; client-side exception applies |
| Enterprise Modules | `ee/` | Fleet EE | Entitlement checks retained; development/licensed use |
| Agent Runtime | `orbit/` | Apache 2.0 / MIT | Agent packaging & update system |
