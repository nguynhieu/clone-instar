import React from 'react'
import axios from 'axios'

export const PostContext = React.createContext();

export class PostProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: []
    }

    this.handlePost = this.handlePost.bind(this)
    this.handleLike = this.handleLike.bind(this)
  }

  handlePost(userId, caption, image) {
    const data = new FormData();
    data.append('userId', userId)
    data.append('caption', caption)
    data.append('image', image)

    axios.post('http://localhost:5000/posts', data)
      .then(res => {
        this.state.posts.unshift(res.data);

        this.setState({
          posts: this.state.posts
        })
      }).catch(err => console.log(err))
  }

  // handleLike(sender, viewer) {
  //   axios.post('http://localhost')
  // }

  componentDidMount() {
    axios.get('http://localhost:5000/posts')
      .then(res => this.setState({
        posts: res.data.reverse(),
        isLoaded: true
      }))
  }

  render() {
    const { posts, isLoaded } = this.state;
    return <PostContext.Provider value={{
      isLoaded,
      posts,
      handlePost: this.handlePost,
      handleLike: this.handleLike
    }}>
      {this.props.children}
    </PostContext.Provider>
  }
} 