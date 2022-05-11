FROM node:lts-alpine
EXPOSE 4200

WORKDIR /ops/admin

COPY package.json /ops/admin/
COPY package-lock.json /ops/admin/

COPY . /ops/admin

RUN npm i
RUN npm run build

CMD ["npm", "run", "ng", "serve"]


# FROM node:lts-alpine
# WORKDIR /ops/admin
# COPY . .
# RUN npm install
# RUN npm run build
# EXPOSE 4200
# CMD ["npm", "run", "ng", "serve"]
