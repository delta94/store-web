FROM node:alpine

RUN apk update && apk --no-cache add git \
    && rm -rf /tmp/* \
    && rm -rf /var/cache/apk/*

WORKDIR /data

COPY ./package.json ./yarn.lock ./

RUN yarn install

COPY ./ ./

RUN yarn build

EXPOSE 3000

USER node

CMD [ "yarn", "start" ]
