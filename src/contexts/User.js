import React from 'react';
import axios from 'axios'

export const UserContext = React.createContext();

export class UserProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
      isLogined: false,
      currentUser: null,
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.logout = this.logout.bind(this)
  }


  handleLogin() {
    this.setState({
      isLogined: true
    })
  }

  setCurrentUser(user) {
    this.setState({
      currentUser: user
    })
  }

  logout() {
    localStorage.clear()
    this.setState({
      isLogined: false
    })
  }

  componentDidMount() {
    axios.get('https://server-instar-clone.herokuapp.com/users')
      .then(res => this.setState({ userList: res.data }))
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.setState({
        isLogined: true,
        currentUser: user
      })
    }
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          isLogined: this.state.isLogined,
          userList: this.state.userList,
          handleLogin: this.handleLogin,
          currentUser: this.state.currentUser,
          setCurrentUser: this.setCurrentUser,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider >
    )
  }
} 