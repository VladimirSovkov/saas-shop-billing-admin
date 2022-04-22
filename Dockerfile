FROM node:lts-alpine
WORKDIR /ops/admin
COPY . .
RUN npm install
RUN npm install —save keycloak-angular keycloak-js
RUN npm run build
EXPOSE 4200
CMD ["npm", "run", "ng", "serve"]
