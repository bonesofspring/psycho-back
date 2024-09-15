FROM node:current-alpine3.19

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .

CMD [ "yarn", "start:dev" ]