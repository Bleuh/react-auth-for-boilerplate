FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm install --silent

COPY . /app

EXPOSE 3001

CMD ["npm", "start"]