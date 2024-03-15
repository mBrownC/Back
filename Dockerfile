FROM node:20
RUN apt-get update && apt-get install -y postgresql-client
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV POSTGRES_HOST localhost
ENV POSTGRES_PORT 5432
ENV POSTGRES_USER mbrownc
ENV POSTGRES_PASSWORD 080520
ENV POSTGRES_DB principal
CMD ["node", "index.js"]