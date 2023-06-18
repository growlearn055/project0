FROM node:18.6.0-alpine
MAINTAINER Pranav
COPY . .
# RUN apt update
RUN npm install
RUN npm run build 
RUN npm install express
RUN npm audit fix
EXPOSE 5173
CMD ["node" , "server.cjs"]