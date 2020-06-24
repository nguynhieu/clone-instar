import React from 'react'
import axios from 'axios'

export const PostContext = React.createContext();

export class PostProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }

    this.handlePost = this.handlePost.bind(this)
  }

  handlePost(userId, caption, image) {
    return (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append('userId', userId)
      data.append('caption', caption)
      data.append('image', image)

      axios.post('http://localhost:5000/posts', data)
        .then(res => {
          console.log(res)
        }).catch(err => console.log(err))
    }
  }

  componentDidMount() {
    axios.get('')
  }

  render() {
    const { posts } = this.state;
    return <PostContext.Provider value={{
      posts,
      handlePost: this.handlePost
    }}>
      {this.props.children}
    </PostContext.Provider>
  }
} 