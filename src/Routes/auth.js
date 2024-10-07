// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const router = express.Router();
const db = require('../server'); // Import the database connection

// User Registration
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into the database
        db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Error registering user' });
            }
            res.status(201).json({ message: 'User registered successfully!' });
        });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

module.exports = router;
