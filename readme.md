<p align="center"><a href="https://avptp.org"><img src="src/images/imagotype.svg" height="70px"></a></p>

# Face

## About

Face is the main web application of [Associació Valenciana pel Transport Públic](https://avptp.org) (Valencian Association for Public Transport), a non-profit organization whose goal is to achieve the public transport that the [Valencian society](https://en.wikipedia.org/wiki/Valencian_Community) deserves.

It is made with [Next.js](https://nextjs.org) —a [React](https://reactjs.org) framework— and love. ❤

### Directory structure

The project follows the default Next.js application structure with the following additions:

- `Containerfile`, `compose.yml`, `Makefile`, `.dockerignore` and `.env.example` contain the configuration and manifests that define the development and runtime environments with [OCI](https://opencontainers.org) containers and [Compose](https://docs.docker.com/compose).
- `.github` holds the [GitHub Actions](https://github.com/features/actions) CI/CD pipelines.

### License

This software is distributed under the MIT license. Please read [the software license](license.md) and [the graphic resources license](src/images/license.md) for more information on the availability and distribution.

## Getting started

This project comes with a containerized environment that has everything necessary to work on any platform without having to install dependencies on the developers' machines.

**TL;TR**

```Shell
make
```

### Requirements

Before starting using the project, make sure that the following dependencies are installed on the machine:

- [Git](https://git-scm.com).
- An [OCI runtime](https://opencontainers.org), like [Docker Desktop](https://www.docker.com/products/docker-desktop/), [Podman Desktop](https://podman.io) or [OrbStack](https://orbstack.dev).
- [Docker Compose](https://docs.docker.com/compose/install/).

It is necessary to install the latest versions before continuing. You may follow the previous links to read the installation instructions.

### Initializing

First, initialize the project and run the environment.

```Shell
make
```

Then, download third-party dependencies.

```Shell
make deps
```

You may stop the environment by running the following command.

```Shell
make down
```

## Usage

Commands must be run inside the containerized environment by starting a shell in the main container (`make shell`).

### Running the development server

Run the following command to start the development server:

```Shell
make run
```

It may be consumed from http://localhost.

> Note that Git is not available in the container, so you should use it from the host machine. It is strongly recommended to use a Git GUI (like [VS Code's](https://code.visualstudio.com/docs/editor/versioncontrol) or [Fork](https://git-fork.com)) instead of the command-line interface.

## Deployment

The deployment process is automated. When changes are incorporated into production (`main` branch) or staging (`develop` branch), an automatic deployment is made to the corresponding environment.

## Troubleshooting

There are several common problems that can be easily solved. Here are their causes and solutions.

### Docker

The Docker environment should work properly. Otherwise, it is possible to rebuild it by running the following command.

```Shell
docker compose down
docker compose build --no-cache node
```

To start from scratch, you can remove all containers, images and volumes of your computer by running the following commands.

> Note that all system containers, images and volumes will be deleted, not only those related to this project.

```Shell
docker compose down
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker volume rm $(docker volume ls -f dangling=true -q)
```
