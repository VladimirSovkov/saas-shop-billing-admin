FROM node:lts-alpine
WORKDIR /ops/admin
COPY . .
RUN npm install
RUN npm run build --prod
EXPOSE 4200
CMD ["npm", "run", "ng", "serve"]
