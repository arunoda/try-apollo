import { graphql } from 'react-apollo'
import BlogHome from '../components/BlogPost'

export default graphql(BlogHome.query, {
  options: (props) => ({
    variables: { id: props.id }
  })
})(BlogHome)
