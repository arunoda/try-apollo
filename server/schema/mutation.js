const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql')
const BlogPost = require('./BlogPost')
const store = require('../store')

module.exports = new GraphQLObjectType({
  name: 'RootMutations',
  fields: () => ({
    addBlogPost: {
      type: BlogPost,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        text: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (root, { title, text }) {
        const post = {
          id: `${store.blogPosts.length + 1}`,
          title,
          text
        }

        store.blogPosts.push(post)
        return post
      }
    }
  })
})
