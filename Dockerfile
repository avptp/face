## Development image
FROM node:10.15.3-alpine AS development

WORKDIR /app

ENV PS1='\u@\h:\w\\$ '
ENV PATH="${PATH}:/app/node_modules/.bin"

ARG USER_ID=1000

RUN apk add --no-cache \
        bash \
 && if [ $USER_ID -ne 1000 ]; then \
        apk add --no-cache -t tmp shadow \
     && groupmod -g $USER_ID node \
     && usermod -u $USER_ID -g $USER_ID node \
     && apk del --purge tmp; \
    fi


## Builder image
FROM node:10.15.3-alpine AS builder

WORKDIR /app

ENV NODE_ENV production
ENV NODE_PATH=src
ENV SASS_PATH=node_modules:src

COPY . .

RUN npm ci \
 && npm run build


## Runtime image
FROM nginx:1.15.12-alpine AS runtime

WORKDIR /app

COPY chart/files/nginx.conf /etc/nginx/nginx.conf
COPY chart/files/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build .
