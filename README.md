# Express App With Docker

This is a simple express app deployed with docker.

## Table of Content

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Start App on Development Environment](#start-app-on-development-environment)
  - [Deploy to a Docker Container](#deploy-to-a-docker-container)
    - [Deploy Using Docker](#using-docker)
    - [Deploy Using Docker Compose](#using-docker-compose)

## Prerequisites

### You should have all of the following installed before start

- [Node >= 12.16.1](https://nodejs.org/en/)

- [Docker Engin >= 19.03.8](https://docs.docker.com/install/)

- [Docker Compose](https://docs.docker.com/compose/install/) (only if you will use it instead of docker).

- Yarn installed (globally recommended) or use `sudo npm i -g yarn` to install it.

## Getting Started

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

  1. #### Using Docker

     - To Build a Docker Image and Deploy to a Docker Container, run command

       ```bash
       docker build -t express-app-with-docker:latest .
       ```

     - To run a docker container from the built docker image, run the command
        ```bash
        docker run -itd --name express-app-with-docker-container express-app-with-docker:latest
        ```

     - To get the ip address for the newly created docker container run command
  
        ```bash
        docker inspect express-app-with-docker-container | grep Address
        ```
  
        Now you should have the following message
  
        ```bash
        "LinkLocalIPv6Address": "",
               "SecondaryIPAddresses": null,
               "SecondaryIPv6Addresses": null,
               "GlobalIPv6Address": "",
               "IPAddress": "172.17.0.2",
               "MacAddress": "02:42:ac:11:00:02",
                       "IPAddress": "172.17.0.2",
                       "GlobalIPv6Address": "",
                       "MacAddress": "02:42:ac:11:00:02"
        ```
  
        The value of the `"IPAddress": "172.17.0.2"` is the ip address for th  newly created docker container.
  
     - To test the app, open your browser on `http://172.17.0.2:8080`
  
        You should get this message "<b>I'm up and running..</b>" 

   2. #### Using Docker Compose
      
      - To Build a Docker Image and Deploy to a Docker Container, run command

        ```bash
        docker-compose build
        ```
      
      - To run a docker container for every service in the built docker image (in our case it's one called web), run the command
        ```bash
        docker-compose up -d
        ```
        You will get a new container with the name <b>express-app-with-docker_web_1</b>
      
      - To get the ip address for the newly created docker container run command
  
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
                    "IPAddress": "172.19.0.2",
                    "GlobalIPv6Address": "",
                    "MacAddress": "02:42:ac:13:00:02",
        ```
  
        The value of the `"IPAddress": "172.19.0.2"` is the ip address for th  newly created docker container.

      - To test the app, open your browser on `http://172.19.0.2:8080`
  
        You should get this message "<b>I'm up and running..</b>"