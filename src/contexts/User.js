import React from 'react';

export const UserContext = React.createContext();

export class UserProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isLogined: false
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.setState({
      isLogined: true
    })
  }

  setCurrentUser(obj) {
    this.setState({
      currentUser: obj
    })
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({
        isLogined: true
      })
    }
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          isLogined: this.state.isLogined,
          handleLogin: this.handleLogin,
          currentUser: this.state.currentUser,
          setCurrentUser: this.setCurrentUser
        }}
      >
        {this.props.children}
      </UserContext.Provider >
    )
  }
} 