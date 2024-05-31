# Base image
FROM node:18-alpine
# FROM node:18-bullseye 

# Create app directory
WORKDIR /usr/src/app

RUN corepack enable yarn

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN apt-get install curl libcurl3

# Install app dependencies
RUN yarn 

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN yarn build

# Start the server using the production build
CMD [ "node", "dist/server/main.js" ]
