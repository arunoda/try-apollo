const {
  GraphQLSchema
} = require('graphql')

const Query = require('./query')

module.exports = new GraphQLSchema({
  query: Query
})
