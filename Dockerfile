FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm ci

COPY . /app

RUN npm run build

RUN npm install serve -g
CMD ["serve", "-s", "dist/"]
