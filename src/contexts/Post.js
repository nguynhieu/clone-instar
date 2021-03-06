import React from 'react'
import axios from 'axios'
import moment from 'moment'

import socket from '../service/socket'

export const PostContext = React.createContext();

export class PostProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      isLoaded: false,
      posts: []
    }

    this.handlePost = this.handlePost.bind(this)
    this.handleLike = this.handleLike.bind(this)
    this.handleComment = this.handleComment.bind(this)
  }

  handlePost(userId, caption, image) {
    const data = new FormData();
    data.append('userId', userId)
    data.append('caption', caption)
    data.append('image', image)

    axios.post('https://server-instar-clone.herokuapp.com/posts', data)
      .then(res => {
        this.state.posts.unshift(res.data);

        this.setState({
          posts: this.state.posts
        })
      }).catch(err => console.log(err))
  }

  handleLike(sender, viewer, postId) {
    const time = moment(new Date(), "YYYYMMDD").fromNow();
    if (sender !== viewer) {
      socket.emit('client-like', {
        sender, viewer, postId, time
      });
    }

    socket.on('like', data => {
      console.log(data)
    })

    axios.post('https://server-instar-clone.herokuapp.com/posts/like', {
      sender, viewer, postId, time
    })
      .then(res => {
        this.setState({
          posts: res.data
        })
      })
      .catch(err => console.log(err))
  }

  handleComment(sender, postId, content) {
    axios.post('https://server-instar-clone.herokuapp.com/posts/comment', {
      sender, postId, content
    })
      .then(res => {
        this.setState({
          posts: res.data
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    axios.get('https://server-instar-clone.herokuapp.com/posts')
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
      handleLike: this.handleLike,
      handleComment: this.handleComment,
    }}>
      {this.props.children}
    </PostContext.Provider>
  }
} 