const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'RootQueries',
  description: 'core queries of the schema',
  fields: () => ({
    blogPosts: {
      type: new GraphQLList(GraphQLString),
      resolve () {
        return [
          'Hello GraphQL',
          'Hello Apollo'
        ]
      }
    }
  })
})
