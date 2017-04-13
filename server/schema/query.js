const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql')
const BlogPost = require('./BlogPost')
const store = require('../store')

module.exports = new GraphQLObjectType({
  name: 'RootQueries',
  description: 'core queries of the schema',
  fields: () => ({
    blogPosts: {
      type: new GraphQLList(BlogPost),
      resolve () {
        return store.blogPosts
      }
    },

    blogPost: {
      type: BlogPost,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (root, { id }) {
        return store.blogPosts.find((post) => post.id === id)
      }
    }
  })
})
