#production dockerfile
FROM node:alpine
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
#want to start prod instead of dev
CMD ["npm", "run", "start"]
