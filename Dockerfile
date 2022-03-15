FROM node:16-alpine

WORKDIR /usr/app

COPY . .

RUN rm -rf node_modules
