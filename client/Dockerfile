<<<<<<< HEAD
FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
=======
### BUILD PHASE
#tag to call it builder, jk there is bug in AWS cant used named tags
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json ./
RUN npm install
COPY . .
#building production assets
RUN npm run build

#RUN PHASE start up NGINX for listening and serving
#production react files
FROM nginx
#for AWS elastic beanstalk to map port
EXPOSE 3000
#override existing default conf file in docker
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
>>>>>>> 9b458223dd68c02568cbd31842ddb4e6ec90fdf9
