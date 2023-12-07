FROM node:21-alpine3.17

WORKDIR /vtal-external-provider-api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
