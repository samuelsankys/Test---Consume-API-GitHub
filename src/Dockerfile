FROM node:16-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

RUN npm install -g npm@8.17.0

RUN npm install --location=global nodemon

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "dev"]