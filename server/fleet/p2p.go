package fleet

import "time"

type P2PPeerInfo struct {
	HostID       uint   `json:"host_id"`
	Hostname     string `json:"hostname"`
	IPAddress    string `json:"ip_address"`
	CachedChunks int    `json:"cached_chunks"`
	BytesServed  int64  `json:"bytes_served"`
	Status       string `json:"status"`
}

type P2PSeeder struct {
	HostID      uint      `json:"host_id"`
	Hostname    string    `json:"hostname"`
	IPAddress   string    `json:"ip_address"`
	Port        int       `json:"port"`
	Subnet      string    `json:"subnet"`
	KBArticleID string    `json:"kb_article_id"`
	FileHash    string    `json:"file_hash,omitempty"`
	FileSize    int64     `json:"file_size,omitempty"`
	UpdatedAt   time.Time `json:"updated_at"`
}

type P2PTransferRecord struct {
	SourceHostID uint      `json:"source_host_id"`
	TargetHostID uint      `json:"target_host_id"`
	KBArticleID  string    `json:"kb_article_id"`
	BytesServed  int64     `json:"bytes_served"`
	CompletedAt  time.Time `json:"completed_at"`
}

type P2PStats struct {
	TotalPackagesShared      int           `json:"total_packages_shared"`
	BytesTransferredP2P      int64         `json:"bytes_transferred_p2p"`
	BandwidthSavedPercentage float64       `json:"bandwidth_saved_percentage"`
	ActiveSeedersCount       int           `json:"active_seeders_count"`
	ActivePeers              []P2PPeerInfo `json:"active_peers"`
}
