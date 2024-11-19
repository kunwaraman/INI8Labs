const db = require("../config/db.js");

exports.getRegistrationById = (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM Registration WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).send(err.message);
        if (results.length === 0) return res.status(404).send("Registration not found");
        res.status(200).json(results[0]);
    });
};

exports.createRegistration = (req, res) => {
    const { name, email, date_of_birth } = req.body;
    const query = "INSERT INTO Registration (name, email, date_of_birth) VALUES (?, ?, ?)";
    db.query(query, [name, email, date_of_birth], (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.status(201).json({ id: results.insertId, name, email, date_of_birth });
    });
};

exports.updateRegistration = (req, res) => {
    const id = req.params.id;
    const { name, email, date_of_birth } = req.body;
    const query = "UPDATE Registration SET name = ?, email = ?, date_of_birth = ? WHERE id = ?";
    db.query(query, [name, email, date_of_birth, id], (err, results) => {
        if (err) return res.status(500).send(err.message);
        if (results.affectedRows === 0) return res.status(404).send("Registration not found");
        res.status(200).json({ id, name, email, date_of_birth });
    });
};

exports.deleteRegistration = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM Registration WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).send(err.message);
        if (results.affectedRows === 0) return res.status(404).send("Registration not found");
        res.status(200).send("Registration deleted successfully");
    });
};
