import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import hostAPI from "services/entities/hosts";
import { IHost } from "interfaces/host";
import PATHS from "router/paths";

const baseClass = "mesh-p2p-card";

const MeshP2PCard = () => {
  const [hosts, setHosts] = useState<IHost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    hostAPI
      .loadHosts({ page: 0, perPage: 100 })
      .then((resp) => {
        if (resp && resp.hosts) {
          setHosts(resp.hosts);
        }
      })
      .catch((err) => {
        console.error("Failed to load hosts for Mesh health card:", err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const totalHosts = hosts.length;
  const onlineHosts = hosts.filter((h) => h.status === "online").length;
  const offlineHosts = hosts.filter((h) => h.status !== "online").length;

  const windowsCount = hosts.filter((h) => h.platform === "windows").length;
  const macCount = hosts.filter((h) => h.platform === "darwin").length;
  const linuxCount = hosts.filter(
    (h) => h.platform !== "windows" && h.platform !== "darwin"
  ).length;

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "darwin":
        return "🍎";
      case "windows":
        return "🖥️";
      default:
        return "🐧";
    }
  };

  return (
    <div
      className={baseClass}
      style={{
        background: "var(--ui-fleet-blue-10, #171d2b)",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "24px",
        border: "1px solid var(--ui-vibrant-blue-50, #2c3a58)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: "16px",
              fontWeight: 600,
              color: "var(--core-fleet-black, #ffffff)",
            }}
          >
            ⚡ Mesh Fleet Health & Node Status
          </h3>
          <p
            style={{
              margin: "4px 0 0",
              fontSize: "12px",
              opacity: 0.75,
              color: "var(--core-fleet-white, #b3c0d8)",
            }}
          >
            Live connectivity, operating system distribution, and fleet nodes
          </p>
        </div>
        <span
          style={{
            background: "rgba(0, 229, 255, 0.15)",
            color: "var(--core-vibrant-blue, #00e5ff)",
            padding: "4px 12px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: onlineHosts > 0 ? "#2ecc71" : "#e74c3c",
              display: "inline-block",
            }}
          />
          {isLoading
            ? "Syncing nodes..."
            : `${onlineHosts} / ${totalHosts} Nodes Online`}
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Link
          to={`${PATHS.MANAGE_HOSTS}?status=online`}
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.25)",
              padding: "12px 16px",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.05)",
              transition: "transform 0.15s ease",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                opacity: 0.65,
                color: "#fff",
              }}
            >
              Online Nodes
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#2ecc71",
                margin: "4px 0",
              }}
            >
              {isLoading ? "--" : onlineHosts}
            </div>
            <div style={{ fontSize: "11px", opacity: 0.6, color: "#fff" }}>
              Communicating & healthy
            </div>
          </div>
        </Link>

        <Link
          to={`${PATHS.MANAGE_HOSTS}?status=offline`}
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.25)",
              padding: "12px 16px",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.05)",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                opacity: 0.65,
                color: "#fff",
              }}
            >
              Offline Nodes
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: offlineHosts > 0 ? "#f39c12" : "#95a5a6",
                margin: "4px 0",
              }}
            >
              {isLoading ? "--" : offlineHosts}
            </div>
            <div style={{ fontSize: "11px", opacity: 0.6, color: "#fff" }}>
              Awaiting check-in
            </div>
          </div>
        </Link>

        <Link to={PATHS.MANAGE_HOSTS} style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "rgba(0,0,0,0.25)",
              padding: "12px 16px",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.05)",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                opacity: 0.65,
                color: "#fff",
              }}
            >
              OS Distribution
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--core-vibrant-blue, #00e5ff)",
                margin: "4px 0",
              }}
            >
              {isLoading
                ? "--"
                : `${windowsCount} Win • ${macCount} Mac • ${linuxCount} Linux`}
            </div>
            <div style={{ fontSize: "11px", opacity: 0.6, color: "#fff" }}>
              {totalHosts} total enrolled devices
            </div>
          </div>
        </Link>
      </div>

      <div style={{ marginTop: "16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: 600,
            marginBottom: "10px",
            opacity: 0.85,
            color: "#fff",
          }}
        >
          <span>Active Fleet Nodes</span>
          <Link
            to={PATHS.MANAGE_HOSTS}
            style={{
              color: "var(--core-vibrant-blue, #00e5ff)",
              textDecoration: "none",
              fontSize: "11px",
              fontWeight: 500,
            }}
          >
            Manage all {totalHosts} hosts →
          </Link>
        </div>

        {isLoading ? (
          <div
            style={{
              fontSize: "12px",
              opacity: 0.6,
              color: "#fff",
              padding: "10px",
            }}
          >
            Loading active nodes...
          </div>
        ) : hosts.length === 0 ? (
          <div
            style={{
              fontSize: "12px",
              opacity: 0.6,
              color: "#fff",
              padding: "10px",
            }}
          >
            No hosts enrolled yet.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {hosts.slice(0, 6).map((host) => (
              <div
                key={host.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "12px",
                  padding: "8px 12px",
                  background: "rgba(0,0,0,0.2)",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ fontSize: "14px" }}>
                    {getPlatformIcon(host.platform)}
                  </span>
                  <Link
                    to={PATHS.HOST_DETAILS(host.id)}
                    style={{
                      fontWeight: 600,
                      color: "var(--core-vibrant-blue, #00e5ff)",
                      textDecoration: "none",
                    }}
                  >
                    {host.hostname}
                  </Link>
                  <span style={{ opacity: 0.5, fontSize: "11px", color: "#fff" }}>
                    ({host.primary_ip || "No IP"})
                  </span>
                  <span
                    style={{
                      opacity: 0.7,
                      fontSize: "11px",
                      background: "rgba(255,255,255,0.08)",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      color: "#fff",
                    }}
                  >
                    {host.os_version || host.platform}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "11px",
                      color:
                        host.status === "online"
                          ? "#2ecc71"
                          : "rgba(255,255,255,0.5)",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor:
                          host.status === "online" ? "#2ecc71" : "#95a5a6",
                      }}
                    />
                    {host.status === "online" ? "Online" : "Offline"}
                  </span>
                  <Link
                    to={PATHS.HOST_DETAILS(host.id)}
                    style={{
                      fontSize: "11px",
                      color: "var(--core-fleet-white, #b3c0d8)",
                      textDecoration: "none",
                      opacity: 0.8,
                    }}
                  >
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MeshP2PCard;
