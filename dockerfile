FROM node:16

WORKDIR /node-app

COPY package.json .

RUN npm i

COPY . ./

EXPOSE 5001

CMD [ "npm", "run", "dev" ]