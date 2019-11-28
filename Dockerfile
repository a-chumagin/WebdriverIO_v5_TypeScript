FROM node:10.17.0-alpine3.9
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
CMD ["npm", "test"]
