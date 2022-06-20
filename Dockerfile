FROM node:16.14

WORKDIR /app

ENV NODE_ENV production

COPY package.json .
RUN yarn set version 3.2.1

COPY .yarn tsconfig.json .yarnrc.yml ./
RUN yarn install
COPY . ./
RUN yarn build

CMD [ "node", "dist/index.js" ]
USER node
