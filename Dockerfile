FROM node:14.15.0-alpine3.10

WORKDIR /src

RUN apk add --update

EXPOSE 8080

CMD ["npm", "start"]