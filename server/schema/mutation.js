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
    },

    updateBlogPost: {
      type: BlogPost,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLString },
        text: { type: GraphQLString }
      },
      resolve (root, { id, title, text }) {
        const post = store.blogPosts.find((p) => p.id === id)
        post.title = title || post.title
        post.text = text || post.text

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (/error/.test(title)) {
              return reject(new Error('Error when updating'))
            }
            resolve(post)
          }, 3000)
        })
      }
    }
  })
})
