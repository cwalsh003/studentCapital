FROM node:latest
MAINTAINER Pranav Jain "pranajain@gmail.com"

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app



# Bundle app source... USE git for server, but copy for developement
#RUN git clone git://github.com/ThePBJain/BarTab-Server.git .
#COPY .env .
#COPY cert.pem cert.pem
#COPY privkey.pem privkey.pem
COPY . .

# Install app dependencies
RUN npm install

EXPOSE 443
CMD [ "npm", "start" ]