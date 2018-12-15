const { GraphQLServer } = require('graphql-yoga');

const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');


// Create the GraphQL Yoga Server

function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',         // ingest schema
        resolvers: {
            Mutation,                           // match those stuff to Mutation or Query
            Query
        },
        resolverValidationOptions: {                    // expose db
            requireResolversForResolveType: false
        },
        context: req => ({ ...req, db }),
    });
}


module.exports = createServer;