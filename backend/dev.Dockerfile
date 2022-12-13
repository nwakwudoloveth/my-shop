FROM node:16-alpine

RUN npm install -g nodemon

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD bin ./bin
ADD src ./src

CMD [ "nodemon" ]

# FROM node:alpine

# RUN npm install -g nodemon

# WORKDIR /app

# ADD package.json package-lock.json ./

# RUN npm install

# ADD bin ./bin

# CMD [ "nodemon" ]
