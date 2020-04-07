FROM node:alpine

RUN apk update && apk --no-cache add git \
    && rm -rf /tmp/* \
    && rm -rf /var/cache/apk/*

WORKDIR /data

COPY ./package.json ./yarn.lock ./

RUN npm install --network-concurrency 1

COPY ./ ./

RUN npm run build

EXPOSE 3000

USER node

CMD [ "yarn", "start" ]
