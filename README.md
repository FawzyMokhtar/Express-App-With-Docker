# Express App With Docker

This is a simple express app deployed with docker.

## Prerequisites

### You should have all of the following installed before start

- Node >= 12.16.1

- DockerEngin >= 19.03.8

- Yarn installed (globally recommended) or use `sudo npm i -g yarn` to install it.

## Getting Started

- Start App On Development Environment

  1. Run command 
     ```bash
     yarn start
     ```

  2. You should see this message
     ```bash
     Express server is up & running on port 3000
     ```

- Build a Docker Image and Deploy to a Docker Container

  1. Run command
     ```bash
     docker build -t express-app-with-docker:latest .
     ```
  
  2. To run a docker container from the built docker image, run the command
     ```bash
     docker run -itd --name express-app-with-docker-container express-app-with-docker:latest 
     ```
  3. To get the ip address for the newly created docker container run command
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
                    "MacAddress": "02:42:ac:11:00:02",
     ```
     The value of the `"IPAddress": "172.17.0.2"` is the ip address for the newly created docker container.

  4. To test the app, open your browser on `http://172.17.0.2:8080`

     You should get this message "<b>I'm up and running..</b>".