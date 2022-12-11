FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install --production

ADD bin ./bin
ADD src ./src

CMD [ "npm", "start" ]
