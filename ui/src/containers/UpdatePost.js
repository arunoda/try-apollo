import { graphql } from 'react-apollo'
import UpdatePost from '../components/UpdatePost'

export default graphql(UpdatePost.query)(UpdatePost)
