FROM node:14

WORKDIR /freeboard-frontend/
COPY . /freeboard-frontend/
# 내 컴퓨터에 있는 폴더 도커로 복사

RUN yarn install
RUN yarn build:ssr
CMD yarn start