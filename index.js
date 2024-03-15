const express = require('express');
const { Pool } = require('pg');
const app = express();
const pool = new Pool({
host: 'localhost',
port: process.env.POSTGRES_PORT,
user: process.env.POSTGRES_USER,
password: process.env.POSTGRES_PASSWORD,
database: process.env.POSTGRES_DB,
});
app.get('/', (req, res) => {
res.send('Hola Mundo!');
});
app.get('/users', async (req, res) => {
const results = await pool.query('SELECT * FROM users');
res.json(results.rows);
});
app.listen(3000, () => {
console.log('Servidor escuchando en el puerto 3000');
});