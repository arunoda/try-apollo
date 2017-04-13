const {
  GraphQLObjectType,
  GraphQLList,
} = require('graphql')
const BlogPost = require('./BlogPost')

module.exports = new GraphQLObjectType({
  name: 'RootQueries',
  description: 'core queries of the schema',
  fields: () => ({
    blogPosts: {
      type: new GraphQLList(BlogPost),
      resolve () {
        return [
          { id: 'one', title: 'Hello GraphQL', text: 'GraphQL is awesome.' },
          { id: 'two', title: 'Hello Apollo', text: 'Apollo is the best way to connect with a GraphQL server.' }
        ]
      }
    }
  })
})
