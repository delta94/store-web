FROM node:alpine

WORKDIR /data

COPY ./package.json ./yarn.lock ./

RUN yarn install

COPY ./ ./

RUN yarn build

EXPOSE 3000

USER node

CMD [ "yarn", "start" ]
