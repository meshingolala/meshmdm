import sendRequest from "services";
import endpoints from "utilities/endpoints";

export interface IP2PPeerInfo {
  host_id: number;
  hostname: string;
  ip_address: string;
  cached_chunks: number;
  bytes_served: number;
  status: string;
}

export interface IP2PStats {
  total_packages_shared: number;
  bytes_transferred_p2p: number;
  bandwidth_saved_percentage: number;
  active_seeders_count: number;
  active_peers: IP2PPeerInfo[];
}

export interface IP2PStatsResponse {
  stats: IP2PStats;
}

export default {
  getP2PStats: (): Promise<IP2PStatsResponse> => {
    return sendRequest("GET", endpoints.MESH_P2P_STATS);
  },
};
