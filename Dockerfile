FROM node:12.10-alpine

RUN apk update && apk upgrade && apk add --update --no-cache \
  bash \
  wait4ports

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

