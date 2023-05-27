import express from 'express';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import fakedata from "./fakedata/index.js";

const app = express();
const httpServer = http.createServer(app);

//resolver
//schema
const typeDefs = `#graphql
    type Folder {
        id: String,
        name: String,
        createdAt: String,
        author: Author
    }
    type Author {
        id: String,
        name: String 
    } 
    type Query {
        folders: [Folder]
    }
`;
const resolvers = {
    Query :{
        folders: () => { return fakedata.folders }
    },
    Folder :{
        author: (parent,args) => { 
            console.log({parent,args}); 
            const authorId = parent.authorId;
            return fakedata.authors.find(author => author.id === authorId);
            //return {id : '123', name : 'Khanh'} }
        },
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({port : 4000}, resolve));
console.log('Server is ready at http://localhost.com:4000');