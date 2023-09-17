FROM node:16-slim

WORKDIR /usr/src/app

COPY . ./

RUN npm i

EXPOSE 8080

# 或 CMD [ "npm", "start:pm2" ]
CMD [ "npm", "start" ]
