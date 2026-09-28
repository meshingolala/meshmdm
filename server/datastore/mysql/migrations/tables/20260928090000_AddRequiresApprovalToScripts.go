package tables

import (
	"database/sql"
	"fmt"
)

func init() {
	MigrationClient.AddMigration(Up_20260928090000, Down_20260928090000)
}

func Up_20260928090000(tx *sql.Tx) error {
	if columnExists(tx, "scripts", "requires_approval") {
		return nil
	}
	if _, err := tx.Exec(`
		ALTER TABLE scripts
		ADD COLUMN requires_approval TINYINT(1) NOT NULL DEFAULT 0,
		ADD COLUMN approved TINYINT(1) NOT NULL DEFAULT 0,
		ADD COLUMN approved_by_id INT(10) UNSIGNED NULL,
		ALGORITHM=INPLACE
	`); err != nil {
		return fmt.Errorf("adding approval columns to scripts table: %w", err)
	}
	return nil
}

func Down_20260928090000(tx *sql.Tx) error {
	return nil
}
