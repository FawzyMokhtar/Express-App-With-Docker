FROM node:12.16.1
WORKDIR /app
COPY . .
RUN yarn
CMD ["yarn", "start"]
