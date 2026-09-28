package tables

import (
	"database/sql"
	"fmt"
)

func init() {
	MigrationClient.AddMigration(Up_20260927230000, Down_20260927230000)
}

func Up_20260927230000(tx *sql.Tx) error {
	if columnExists(tx, "software_installers", "p2p_enabled") {
		return nil
	}
	if _, err := tx.Exec(`
		ALTER TABLE software_installers
		ADD COLUMN p2p_enabled TINYINT(1) NOT NULL DEFAULT 0,
		ALGORITHM=INPLACE
	`); err != nil {
		return fmt.Errorf("adding p2p_enabled to software_installers table: %w", err)
	}
	return nil
}

func Down_20260927230000(tx *sql.Tx) error {
	return nil
}
