ARG NODE_VERSION=22.12.0-bookworm-slim


#### Base image ####
FROM node:${NODE_VERSION} AS base

WORKDIR /usr/src/app

ENV PATH="${PATH}:/usr/src/app/node_modules/.bin"
ENV NEXT_TELEMETRY_DISABLED=1

ARG USER_ID=1000
ARG USER_NAME=node

RUN chown -R ${USER_NAME}: /usr/src/app


#### Development image ####
FROM base AS development

ENV PROMPT="%B%F{cyan}%n%f@%m:%F{yellow}%~%f %F{%(?.green.red[%?] )}>%f %b"

RUN apt update -q \
 && apt install -y --no-install-recommends \
        zsh \
 && apt clean

RUN if [ ${USER_ID} -ne 1000 ]; then \
       groupmod -g ${USER_ID} ${USER_NAME} \
 &&    usermod -u ${USER_ID} -g ${USER_ID} ${USER_NAME}; \
    fi \
 && chown -R ${USER_NAME}: .

USER ${USER_NAME}

RUN touch /home/${USER_NAME}/.zshrc


#### Installer image ####
FROM base AS installer

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npx prettier --check .

ENV NODE_ENV=production

RUN npm run build


#### Runtime image ####
FROM base AS runtime

COPY --from=builder --chown=node:node /usr/src/app/.next ./.next
COPY --from=builder --chown=node:node /usr/src/app/next.config.mjs ./next.config.mjs
COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=node:node /usr/src/app/package.json ./package.json
COPY --from=builder --chown=node:node /usr/src/app/public ./public

USER ${USER_NAME}

ENV NODE_ENV=production

CMD ["npm", "run", "start"]
