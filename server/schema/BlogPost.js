const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'BlogPost',
  description: 'Represent a blog post',
  fields: () => ({
    id: {
      type:  new GraphQLNonNull(GraphQLString)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    text: {
      type: GraphQLString
    }
  })
})
