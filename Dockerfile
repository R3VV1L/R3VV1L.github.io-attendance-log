FROM node:16-alpine as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /app
RUN npm run build

FROM nginx:1.21.3-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 5172
CMD ["nginx", "-g", "daemon off;"]
