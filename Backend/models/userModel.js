const db = require("../config/db.js");

const Registration = {
    findById: (id, callback) => {
        db.query("SELECT * FROM Registration WHERE id = ?", [id], callback);
    },
    create: (data, callback) => {
        const { name, email, date_of_birth } = data;
        db.query(
            "INSERT INTO Registration (name, email, date_of_birth) VALUES (?, ?, ?)",
            [name, email, date_of_birth],
            callback
        );
    },
    update: (id, data, callback) => {
        const { name, email, date_of_birth } = data;
        db.query(
            "UPDATE Registration SET name = ?, email = ?, date_of_birth = ? WHERE id = ?",
            [name, email, date_of_birth, id],
            callback
        );
    },
    delete: (id, callback) => {
        db.query("DELETE FROM Registration WHERE id = ?", [id], callback);
    },
};

module.exports = Registration;
