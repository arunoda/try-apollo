import { graphql } from 'react-apollo'
import UpdatePost from '../components/UpdatePost'

export default graphql(UpdatePost.query, {
  props: ({ ownProps, mutate }) => ({
    update: (id, title, text) => mutate({
      variables: { id, title, text }
    })
  })
})(UpdatePost)
