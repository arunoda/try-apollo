import React from 'react'
import { gql } from 'react-apollo'

export default class UpdatePost extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {}
  }

  getInputValue(input) {
    const value = input.value.trim()
    return value === '' ? null : value
  }

  updateBlogPost () {
    const { id } = this.props
    const title = this.getInputValue(this.title)
    const text = this.getInputValue(this.text)

    this.setState({ error: null, loading: true })

    this.props.update(id, title, text)
      .then(() => {
        this.setState({ loading: false })
      })
      .catch((error) => {
        this.setState({ loading: false, error: error.message })
      })

    this.title.value = ''
    this.text.value = ''
  }

  render () {
    const { error, loading } = this.state

    if (loading) {
      return (<p>Updating post...</p>)
    }

    return (
      <div>
        { error? <p style={{color: 'red'}}>{error}</p> : null }
        <input
          type="text"
          ref={(r) => this.title = r }
          placeholder="Post Title"
        />
        <br />
        <textarea
          ref={(r) => this.text = r}
          placeholder="Post Text"
        />
        <br />
        <button onClick={() => this.updateBlogPost()}>Update Blog Post</button>
      </div>
    )
  }
}

UpdatePost.query = gql`
  query blogPost($id: String!) {
    blogPost(id: $id) {
      id,
      title,
      text
    }
  }
`

UpdatePost.mutation = gql`
  mutation updateBlogPost($id: String! $text: String, $title: String) {
    updateBlogPost(id: $id, text: $text, title: $title) {
      id,
      title,
      text
    }
  }
`
