import React from 'react'
import { gql } from 'react-apollo'
import { Link } from 'react-router-dom'
import AddPost from '../containers/AddPost'

export default class BlogHome extends React.Component {
  render () {
    const { data } = this.props
    if (data.loading) return <p>Loading...</p>

    return (
      <div>
        <ul>
          { data.blogPosts.map(({id, title}) => (
            <li key={id}>
              <Link to={`/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
        <hr />
        <AddPost />
      </div>
    )
  }
}

BlogHome.query = gql`
  query blogPostTitles {
    blogPosts {
      id,
      title
    }
  }
`
