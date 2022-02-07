FROM node:16
LABEL  maintainer Kota Sato "satokota@jp.ibm.com"

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

ENV PORT=8080
EXPOSE 8080

CMD [ "npm", "start" ]
