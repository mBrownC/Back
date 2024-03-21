# Usa la imagen de Node.js versión 20
FROM node:20

# Instala el cliente de PostgreSQL
RUN apt-get update && apt-get install -y postgresql-client

# Establece el directorio de trabajo en /app
WORKDIR /app

# Instala Express y el paquete dotenv
RUN npm install express pg sequelize dotenv

# Copia todos los archivos de la aplicación
COPY . .

# Define las variables de entorno para los puertos de escucha
ENV PORT=3005
ENV POSTGRES_PORT=5432

# Define el comando predeterminado para ejecutar la aplicación
CMD ["node", "index.js"]