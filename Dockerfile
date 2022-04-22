FROM node:lts-alpine
WORKDIR /ops/admin
COPY . .
RUN npm install
RUN npm run build
EXPOSE 4200
CMD ["ng","serve","--host", "0.0.0.0"]
