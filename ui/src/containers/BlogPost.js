import { graphql } from 'react-apollo'
import BlogPost from '../components/BlogPost'

export default graphql(BlogPost.query, {
  options: (props) => ({
    variables: { id: props.match.params.id }
  })
})(BlogPost)
