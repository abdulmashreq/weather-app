FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run prodtest

RUN npm run build

CMD [ "npm", "run", "startserver" ]

EXPOSE 3002
EXPOSE 4002
