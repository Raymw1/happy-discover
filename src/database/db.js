const Database = require("sqlite-async");

// CREATING TABLE
function execute(db) {
    return db.exec(`
    CREATE TABLE IF NOT EXISTS orphanages (
        id INTEGER, name TEXT NOT NULL, description TEXT, whatsapp TEXT NOT NULL, lat TEXT NOT NULL, lng TEXT NOT NULL, images TEXT NOT NULL,
        instructions TEXT NOT NULL, opening_hours TEXT NOT NULL, open_on_weekends TEXT NOT NULL,
        PRIMARY KEY(id)
        );
        `);
    }
    
    // CREATING/OPENING DB.sqlite AND EXPORTING
    module.exports = Database.open(__dirname + "/database.sqlite").then(execute);