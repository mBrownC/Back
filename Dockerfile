FROM node:20

# Instala el cliente de PostgreSQL
RUN apt-get update && apt-get install -y postgresql-client
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias de Node.js
RUN npm install

# Instala Express y PostgreSQL
RUN npm install express pg

# Copia el resto de los archivos de la aplicación
COPY . .

# Establece las variables de entorno para PostgreSQL
ENV POSTGRES_HOST=localhost
ENV POSTGRES_PORT=5432
ENV POSTGRES_USER=mbrownc
ENV POSTGRES_PASSWORD=080520
ENV POSTGRES_DB=principal

# Define el comando predeterminado para ejecutar la aplicación
CMD ["node", "index.js"]