FROM node:14.15.0-alpine3.11

WORKDIR /src

RUN npm cache --force clean \
    && rm -rf node_modules package-lock.json \
    && npm install \
    && apk add --update

# RUN apk add --update

EXPOSE 8080

CMD ["npm", "run", "start"]