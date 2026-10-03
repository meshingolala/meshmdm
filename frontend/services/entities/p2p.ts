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

export interface IP2PSeeder {
  host_id: number;
  hostname: string;
  ip_address: string;
  port: number;
  subnet: string;
  kb_article_id: string;
  file_hash?: string;
  file_size?: number;
  updated_at: string;
}

export interface IP2PStats {
  total_packages_shared: number;
  bytes_transferred_p2p: number;
  bandwidth_saved_percentage: number;
  active_seeders_count: number;
  active_peers: IP2PPeerInfo[];
}

export interface IP2PTransferRecord {
  source_host_id: number;
  target_host_id: number;
  kb_article_id: string;
  bytes_served: number;
  completed_at: string;
}

const p2pAPI = {
  getP2PStats: (): Promise<{ stats: IP2PStats }> => {
    return sendRequest("GET", endpoints.MESH_P2P_STATS);
  },
  registerSeeder: (seeder: Partial<IP2PSeeder>): Promise<{ seeder: IP2PSeeder }> => {
    return sendRequest("POST", endpoints.MESH_P2P_SEEDERS, { seeder });
  },
  listSeeders: (subnet?: string, kb?: string): Promise<{ seeders: IP2PSeeder[] }> => {
    let path = endpoints.MESH_P2P_SEEDERS;
    const params: string[] = [];
    if (subnet) params.push(`subnet=${encodeURIComponent(subnet)}`);
    if (kb) params.push(`kb=${encodeURIComponent(kb)}`);
    if (params.length > 0) {
      path += `?${params.join("&")}`;
    }
    return sendRequest("GET", path);
  },
  recordTransfer: (record: IP2PTransferRecord): Promise<{ message: string }> => {
    return sendRequest("POST", endpoints.MESH_P2P_TRANSFERS, { record });
  },
};

export default p2pAPI;
