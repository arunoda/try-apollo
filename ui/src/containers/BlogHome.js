import { graphql } from 'react-apollo'
import BlogHome from '../components/BlogHome'

export default graphql(BlogHome.query)(BlogHome)
