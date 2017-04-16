import { graphql } from 'react-apollo'
import AddPost from '../components/AddPost'

export default graphql(AddPost.mutation)(AddPost)
