### GraphQL

specification to implement FE and BE

agnostic to language, implement in
- any server
- any client - web, arduino, IoT


a spec, like JSON, 
comes with API structure

- can replace REST
- or can sit in front of a REST as a proxy


#### Intro

Prisma server (like GraphiQL)

GraphQL
- 1 endpoint
- returns only the data you requested

- typed: you have to specify types

Queries - pull data

Mutations - CRUD data

- simplifies relationships, 
    can be a tree of relationships
- self documenting


![](2018-12-10-22-26-07.png)


- GraphQL don't have queries, sort, filter like MySQL
- server implements "resolvers" that implements these

Prisma extras
- `where`

![](2018-12-10-22-29-04.png)