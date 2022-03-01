
# Inventory-Graph  - Graphql Inventory Management
Inventory-Graph is a Graphql API for Inventory Management. This system enables the company to manage the inventory resources of a warehouse.
the system composed by:

- Categories management
- Products management
- Purchase (Input) management
- Sales (Output) management
- Customers maangement
- Products quantities update automaticly
-
## Built With
- [NestJS](https://nestjs.com/) a progressive Node.js framework built with TypeScript
- [MongoDB](https://www.mongodb.com/) a document-oriented NoSQL database
- [TypeORM](https://typeorm.io/) a TypeScript ORM
- [GraphQL](https://www.npmjs.com/package/graphql) The JavaScript implementation for GraphQL
- [Apollo Server Express](https://www.npmjs.com/package/apollo-server-express) his is the Express integration of Apollo Server


## Installation

### Installation with docker
Install docker on Mac, Windows or Linux [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

For Linux you need to install docker compose separately here [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

```bash
# Get the latest snapshot
$ git clone https://github.com/Adib128/inventory-graph

# Change directory
$ cd vh-manager

# Runing the docker container
$ docker-compose up

```
Now if you go to https://invetory-graph.herokuapp.com/graphql, you'll get

### Installation without docker

You can install the project on your own server.
```bash
# Get the latest snapshot
$ git clone https://github.com/Adib128/inventory-graph

# Change directory
$ cd vh-manager

# Install NPM dependencies
$ npm install

# Then simply start the project
$ npm run start
```

## Documentation

You'll find the graphql playground containing schemas, queries and mutations here [https://invetory-graph.herokuapp.com/graphql](https://invetory-graph.herokuapp.com/graphql).
