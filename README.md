# Express App With Docker

This is a simple express app with mysql database deployed with docker.

## Table of Content

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Database Setup](#database-setup)
  - [Start App on Development Environment](#start-app-on-development-environment)
  - [Deploy to a Docker Container](#deploy-to-a-docker-container)
    - [Deploy Using Docker Compose](#using-docker-compose)

## Prerequisites

### You should have all of the following installed before start

- [Node >= 12.16.1](https://nodejs.org/en/)

- [Docker Engin >= 19.03.8](https://docs.docker.com/install/)

- [Docker Compose](https://docs.docker.com/compose/install/) (only if you will use it instead of docker).

- [MySQL Server](https://www.mysql.com/) (only if you want to run this project on you local machine).

- Yarn installed (globally recommended) or use `sudo npm i -g yarn` to install it.

## Getting Started

- ### Database Setup

  1. Follow the [instructions](https://dev.mysql.com/doc/refman/8.0/en/installing.html) to setup a MySQL server on your local machine.

  2. Use [workbench](https://dev.mysql.com/doc/workbench/en/) or [mysql shell](https://dev.mysql.com/doc/mysql-shell/8.0/en/) to run the following script

     ```sql
     CREATE DATABASE `express-app-with-docker-db`;
     ```

     to create an empty to be used in our express app.

  3. Go to the <i>"sequelize.js"</i> file located in the path <i>"src/data/"</i> and make sure all credentials are right.

     <b>Important</b>, any changes in this credentials requires a change to the files <i>"Dockerfile"</i> and <i>"docker-compose.yml"</i> .

- ### Start App on Development Environment

  1. Run command

     ```bash
     yarn start
     ```

  2. You should see this message
     ```bash
     Express server is up & running on port 8080
     ```

- ### Deploy to a Docker Container

  - #### Using Docker Compose

    - If you changed any credentials in the step [database setup](#database-setup), you should update these changes in the files <i>"Dockerfile"</i> and <i>"docker-compose.yml"</i> .

    - Also you should update the file <i>"Dockerfile"</i> and use your <b>host</b> machine ip address instead of mine(172.19.0.1).

    - More details are included in the <i>"Dockerfile"</i> and <i>"docker-compose.yml"</i> files.

    - To Build a Docker Image and Deploy to a Docker Container, run command

      ```bash
      docker-compose build
      ```

    - To run a docker container for every service in the built docker image (in our case two services web & db), run the command

      ```bash
      docker-compose up -d
      ```

      You will get two new containers with the name <b>express-app-with-docker_web_1</b> and <b>express-app-with-docker_db_1</b>

    - To get the ip address for the newly created express app docker container, run command

      ```bash
      docker inspect express-app-with-docker_web_1 | grep Address
      ```

      Now you should have the following message

      ```bash
      "LinkLocalIPv6Address": "",
           "SecondaryIPAddresses": null,
           "SecondaryIPv6Addresses": null,
           "GlobalIPv6Address": "",
           "IPAddress": "",
           "MacAddress": "",
                   "IPAddress": "172.19.0.3",
                   "GlobalIPv6Address": "",
                   "MacAddress": "02:42:ac:13:00:03"
      ```

      The value of the `"IPAddress": "172.19.0.3"` is the ip address for th newly created docker container.

    - To test the app, open your browser on `http://172.19.0.3:8080` or `http://localhost:8080`

      You should get this message

      ```json
      [
        {
          "id": 1,
          "name": "Samsung Galaxy S5",
          "price": "4500.00"
        },
        {
          "id": 2,
          "name": "Samsung Galaxy S6",
          "price": "5000.00"
        },
        {
          "id": 3,
          "name": "Huawei P10 Lite",
          "price": "5200.00"
        },
        {
          "id": 4,
          "name": "Huawei P30",
          "price": "6500.00"
        },
        {
          "id": 5,
          "name": "Huawei P30 Lite",
          "price": "5800.00"
        }
      ]
      ```

    Or you may get a message indicates that the database server is not ready yet, don't worry and try again in 10 seconds.
