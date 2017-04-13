const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
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
    },

    blogPost: {
      type: BlogPost,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (root, { id }) {
        return {
          id,
          title: `Post id: ${id}`,
          text: `This is the content for post id: ${id}`
        }
      }
    }
  })
})
