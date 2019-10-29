const foodResolvers = require('./foodResolvers');

module.exports = {
    Query: {
        ...foodResolvers.Query
    },
    Mutation:{
        ...foodResolvers.Mutation
    }
};