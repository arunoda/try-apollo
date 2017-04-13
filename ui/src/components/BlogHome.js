import React from 'react'
import { gql } from 'react-apollo'
import { Link } from 'react-router-dom'

export default class BlogHome extends React.Component {
  render () {
    const { data } = this.props
    if (data.loading) return <p>Loading...</p>

    return (
      <ul>
        { data.blogPosts.map(({id, title}) => (
          <li key={id}>
            <Link to={`/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
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
