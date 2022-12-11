FROM node:16-alpine

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD public ./public

ADD .prettierrc.json .eslintrc.cjs vite.config.js ./

CMD [ "npm", "run", "dev" ]
