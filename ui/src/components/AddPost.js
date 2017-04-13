import React from 'react'
import { gql } from 'react-apollo'

export default class AppPost extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {}
  }

  getInputValue(input) {
    const value = input.value.trim()
    return value === '' ? null : value
  }

  addBlogPost () {
    const title = this.getInputValue(this.title)
    const text = this.getInputValue(this.text)

    this.setState({ error: null, loading: true })

    this.props.mutate({
      variables: { title, text },
      updateQueries: {
        // blogPostTitles is the name of the query we need to update.
        blogPostTitles: (prev, { mutationResult }) => {
          const newPost = mutationResult.data.addBlogPost
          prev.blogPosts = [...prev.blogPosts, newPost]
          return prev
        }
      }
    })
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
      return (<p>Adding post...</p>)
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
        <button onClick={() => this.addBlogPost()}>Add Blog Post</button>
      </div>
    )
  }
}

AppPost.query = gql`
  mutation addBlogPost($text: String!, $title: String!) {
    addBlogPost(text: $text, title: $title) {
      id,
      title,
      text
    }
  }
`
