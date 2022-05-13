FROM node:lts-alpine
# EXPOSE 4200
EXPOSE 8080

WORKDIR /ops/admin

COPY package.json /ops/admin/
COPY package-lock.json /ops/admin/

COPY . /ops/admin

RUN npm i
# RUN npm run build

# dist\saas-shop-admin-accountant
RUN npm install -g http-server

# CMD ["npm", "run", "start"]
CMD ["npm", "run", "docker-dev"]


# FROM node:lts-alpine
# WORKDIR /ops/admin
# COPY . .
# RUN npm install
# RUN npm run build
# EXPOSE 4200
# CMD ["npm", "run", "ng", "serve"]
