-- Crear la base de datos
CREATE DATABASE principal;

-- Conectar a la base de datos
\c principal;

-- Crear la tabla con datos ficticios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    edad INT
);

-- Insertar datos ficticios en la tabla
INSERT INTO usuarios (nombre, edad) VALUES
('Juan', 30),
('María', 25),
('Pedro', 35);
