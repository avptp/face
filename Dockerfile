## Base image
FROM node:16.14.2-alpine3.15 AS base

ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /usr/src/app


## Development image
FROM base AS development

ARG USER_ID=1000

ENV PATH="${PATH}:/usr/src/app/node_modules/.bin"

RUN if [ $USER_ID -ne 1000 ]; then \
        apk add --no-cache -t volatile \
            shadow \
     && groupmod -g $USER_ID node \
     && usermod -u $USER_ID -g $USER_ID node \
     && apk del --purge volatile; \
    fi


## Builder image
FROM base AS builder

COPY package.json package-lock.json ./

RUN npm ci

ENV NODE_ENV production

COPY . .

RUN npx prettier --check .

RUN npm run build


## Runtime image
FROM base AS runtime

ENV NODE_ENV production

COPY --from=builder --chown=node:node /usr/src/app/next.config.js ./next.config.js
COPY --from=builder --chown=node:node /usr/src/app/public ./public
COPY --from=builder --chown=node:node /usr/src/app/.next ./.next
COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=node:node /usr/src/app/package.json ./package.json

USER node

CMD ["npm", "run", "start"]
