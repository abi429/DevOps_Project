FROM node:16-alpine


WORKDIR /app


COPY package*.json ./


RUN npm install


RUN npm install -g pm2


COPY . .


EXPOSE 5000


CMD ["pm2-runtime", "server.js"]
