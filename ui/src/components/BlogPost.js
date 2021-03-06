import React from 'react'
import { Link } from 'react-router-dom'
import { gql } from 'react-apollo'
import UpdatePost from '../containers/UpdatePost'

export default class BlogPost extends React.Component {
  render () {
    const { data } = this.props
    if (data.loading) return (<p>Loading...</p>)

    return (
      <div>
        <Link to="/">Go Back</Link>
        <h1>{data.blogPost.title}</h1>
        <p>{data.blogPost.text}</p>
        <hr />
        <UpdatePost id={data.blogPost.id}/>
      </div>
    )
  }
}

BlogPost.query = gql`
  query blogPost($id: String!) {
    blogPost(id: $id) {
      id,
      title,
      text
    }
  }
`
