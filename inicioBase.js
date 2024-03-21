const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;

// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

// Crea una instancia de Sequelize para conectarse a la base de datos PostgreSQL
const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres'
});

// Define el modelo de la tabla Usuarios
const Usuario = sequelize.define('usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Función asincrónica para sincronizar el modelo con la base de datos y agregar datos ficticios
async function inicializarBaseDeDatos() {
    try {
        // Sincroniza el modelo con la base de datos
        await sequelize.sync({ force: true });
        console.log('La tabla Usuarios se sincronizó correctamente.');

        // Inserta datos ficticios en la tabla
        await Usuario.bulkCreate([
            { nombre: 'Juan', edad: 30 },
            { nombre: 'María', edad: 25 },
            { nombre: 'Pedro', edad: 35 }
        ]);
        console.log('Los datos ficticios se insertaron correctamente.');
    } catch (error) {
        console.error('Error al inicializar la base de datos:', error);
    }
}

// Exporta la función para que pueda ser utilizada en otros archivos
module.exports = inicializarBaseDeDatos;
    