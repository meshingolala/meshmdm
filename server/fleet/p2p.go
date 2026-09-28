package fleet

type P2PPeerInfo struct {
	HostID       uint   `json:"host_id"`
	Hostname     string `json:"hostname"`
	IPAddress    string `json:"ip_address"`
	CachedChunks int    `json:"cached_chunks"`
	BytesServed  int64  `json:"bytes_served"`
	Status       string `json:"status"`
}

type P2PStats struct {
	TotalPackagesShared      int           `json:"total_packages_shared"`
	BytesTransferredP2P      int64         `json:"bytes_transferred_p2p"`
	BandwidthSavedPercentage float64       `json:"bandwidth_saved_percentage"`
	ActiveSeedersCount       int           `json:"active_seeders_count"`
	ActivePeers              []P2PPeerInfo `json:"active_peers"`
}
