# koa2-graphql-mongodb ![](https://img.shields.io/badge/node-7.7.4-blue.svg)
A simple GraphQL server with Koa2 and MongoDB

## Installation
```
git clone https://github.com/nikitamarcius/koa2-graphql-mongodb

$ cd koa2-graphql-mongodb
$ npm i
$ npm run dev
```

## Initialization example

### Mutation
```
mutation firstMutation{
  UserCreate(data: {firstName: "John", lastName: "Dohe"})
}
```
```
mutation secondMutation{
  UserCreate(data: {firstName: "Jane", lastName: "Dohe"})
}
```
### Queries
```
{
  Users{
    firstName
    lastName
  }
}
```

## Tutorials 
- <img src="https://cdn-static-1.medium.com/_/fp/icons/favicon-medium.TAS6uQ-Y7kcKgi0xjcYHXw.ico" alt="icon" width="15" height="15"/>  [Tutorial: GraphQL server with Koa2 and MongoDB](https://medium.com/@nikita.marcius/tutorial-graphql-server-with-koa2-and-mongodb-27405e71713e)
