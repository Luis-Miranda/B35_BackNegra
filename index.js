require ('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const resolvers = require('./src/resolvers');
const { makeExecutableSchema } = require('graphql-tools');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {useMongoClient:true,useNewUrlParser:true,useCreateIndex:true});

const mongo = mongoose.connection;

mongo.on('error', (error)=>console.log(error))
    .once('open', () => console.log('Connected to database'));

const typeDefs = importSchema(__dirname + '/schema.graphql');


/* ` 
    type Query{
        hello(name: String!):String!
        getAllUsers:[User]
    }
    type Mutation{
        createUser(name: String!,age:Int!):User
    }
    type User{
        id: Int!
        name: String!
        age:Int!
    }
 `;

const resolvers = {
    Query:{
        hello:(root, params, context, info) => `Hola ${params.name}`,
        getAllUsers:(root,params,context,info)=> users, 
    },
    Mutation:{
        createUser: (root, params, context, info) => {
            const user = {
                id:user.lenght+1,
                name:params.name,
                age:params.age,
            };
            user.push(user);
            return user;
        }
    } 
}; */

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
const server = new GraphQLServer({
    schema
});

server.start(() => console.log('Si Funciona Prro :D'));