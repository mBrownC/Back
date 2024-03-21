const express = require('express');
// Importa Sequelize y el controlador de PostgreSQL
const Sequelize = require('sequelize');
const inicializarBaseDeDatos = require('./inicioBase.js');

// Crea una instancia de la aplicación Express
const app = express();

// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

// Configura el puerto
const PORT = process.env.PORT || 3005;

// Define el middleware para manejar solicitudes JSON
app.use(express.json());

// Define el puerto en el que la aplicación escuchará las solicitudes
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Llama a la función para inicializar la base de datos
inicializarBaseDeDatos();
