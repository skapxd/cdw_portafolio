FROM node:alpine 
# FROM node:14.18-alpine 
WORKDIR /app
COPY . .
RUN npm i
RUN yarn build && yarn install --production
CMD ["yarn", "start"]