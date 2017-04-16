import { graphql, compose } from 'react-apollo'
import UpdatePost from '../components/UpdatePost'

export default compose(
  graphql(UpdatePost.query, {
    options: (props) => ({
      variables: { id: props.id }
    })
  }),
  graphql(UpdatePost.mutation, {
    props: ({ ownProps, mutate }) => ({
      update: (id, title, text) => mutate({
        variables: { id, title, text },
        optimisticResponse: {
          __typename: 'RootMutations',
          updateBlogPost: {
            __typename: 'BlogPost',
            id,
            title: title || ownProps.title,
            text: text || ownProps.text
          }
        }
      })
    })
  })
)(UpdatePost)
