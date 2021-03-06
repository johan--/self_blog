FROM node:alpine
RUN mkdir -p /opt/data/
WORKDIR /opt/data
COPY . /opt/data
RUN npm install
EXPOSE 3000
CMD DEBUG=* node production.js