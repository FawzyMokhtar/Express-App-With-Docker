FROM node:12.16.1
WORKDIR /app
EXPOSE 8080
COPY . .
RUN yarn
CMD ["yarn", "start"]
