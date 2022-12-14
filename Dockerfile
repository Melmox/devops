FROM node:19-alpine3.15

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 80
CMD [ "node", "index.js" ]