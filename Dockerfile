FROM node:15.0.1-alpine3.10

WORKDIR /src

RUN apk add --update

EXPOSE 8080

CMD ["npm", "start"]