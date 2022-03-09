FROM node:16

WORKDIR /sample_build/
COPY . /sample_build/

RUN yarn install
RUN yarn build:ssr
CMD yarn start