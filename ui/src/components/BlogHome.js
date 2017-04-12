import React from 'react'
import { gql } from 'react-apollo'

export default class BlogHome extends React.Component {
  render () {
    const { data } = this.props
    if (data.loading) return <p>Loading...</p>

    return (
      <ul>
        { data.posts.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    )
  }
}

BlogHome.query = gql`query { posts: blogPosts }`
