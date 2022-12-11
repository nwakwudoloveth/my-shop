FROM node:16-alpine AS BUILDER

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD .prettierrc.json .eslintrc.cjs vite.config.js ./

ADD src ./src
ADD public ./public

RUN npm run build

FROM node:16-alpine

WORKDIR /app

RUN npm i -g serve

COPY --from=BUILDER /app/dist ./

CMD serve -s -l $PORT
