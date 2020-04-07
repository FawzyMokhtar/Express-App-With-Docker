FROM node:12.16.1
WORKDIR /app
COPY . .
# Set the environment variables as folow.
# The 172.19.0.1 supposed to be the host machine ip address.
# We use the host machine ip address to reach the database container address.
# These values must be in sync with the values in the docker-compose.yml file.
ENV DB_HOST=172.19.0.1 DB_HOST_PORT=5050 DB_USER=root DB_USER_PASSWORD=fawzy
# Install project dependencies buy running yarn.
RUN yarn
# Start our app.
CMD ["yarn", "start"]
