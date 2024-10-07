// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,      // Use DB_HOST as defined in your .env
    port: process.env.DB_PORT || 3306, // Default to 3306 if not set
    user: process.env.DB_USER,      // Use DB_USER as defined in your .env
    password: process.env.DB_PASSWORD, // Use DB_PASSWORD as defined in your .env
    database: process.env.DB_NAME,   // Use DB_NAME as defined in your .env
});

// Connect to MySQL Database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// Routes (Include your routes here)
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
