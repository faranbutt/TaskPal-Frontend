FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

ENTRYPOINT [ "npm","run","dev" ]