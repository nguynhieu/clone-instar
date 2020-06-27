import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames'
import { Link, Redirect } from 'react-router-dom'
import { Container } from 'reactstrap'
import axios from 'axios'
import Swal from 'sweetalert2'

import { UserContext } from '../../../contexts/User'

import './Signup.css'

import instar3 from '../../../public/images/instar3.png'
import instar4 from '../../../public/images/instar4.png'

const Signup = () => {
  const { isLogined } = useContext(UserContext)

  const [showSignupBtn, setShowSignupBtn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false)
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const onChangeFullname = (e) => {
    setFullname(e.target.value);
  }
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('https://server-instar-clone.herokuapp.com/users/signup', {
      email, fullname, username, password
    }).then(res => {
      console.log(res);
      Swal.fire(
        'Registered!',
        'Welcom!',
        'success'
      )
      setTimeout(() => {
        setIsRegistered(true)
      }, 500)
    })
  }

  useEffect(() => {
    if (email.length > 2 && username.length > 3 && fullname.length > 3 && password.length > 5) {
      setShowSignupBtn(true)
    } else setShowSignupBtn(false)
  }, [email.length, username.length, fullname.length, password.length])

  if (isRegistered) {
    return <Redirect to="/login" />
  }

  if (isLogined) {
    return <Redirect to="/" />
  }

  return (
    <div className="Signup-wrapper">
      <Container>
        <div className="Signup-header row">
          <div className="Signup-form">
            <div className="Signup">
              <div className="Signup-logo" />
              <div className="Signup-suggest">
                Sign up to see photos and videos from your friends.
              </div>
              <form onSubmit={onSubmit}>
                <div className="Signup-action">
                  <div className="Signup-action-account">
                    <input
                      onChange={onChangeEmail}
                      id="Form-email"
                      name="email"
                      type="email"
                      required
                    />
                    <label htmlFor="Form-email">
                      Mobile Number or Email
                    </label>
                  </div>
                  <div className="Signup-action-fullname">
                    <input
                      onChange={onChangeFullname}
                      id="Form-fullname"
                      name="fullname"
                      required
                    />
                    <label htmlFor="Form-password">Full Name</label>
                  </div>
                  <div className="Signup-action-username">
                    <input
                      onChange={onChangeUsername}
                      id="Form-username"
                      name="username"
                      required
                    />
                    <label htmlFor="Form-password">Username</label>
                  </div>
                  <div className="Signup-action-password">
                    <input
                      onChange={onChangePassword}
                      id="Form-password"
                      name="password"
                      type="password"
                      required
                    />
                    <label htmlFor="Form-password">Password</label>
                  </div>
                  <button
                    type="submit"
                    className={classNames({
                      "Signup-btn": true,
                      "Show-click": showSignupBtn
                    })}
                  >
                    Sign up
                  </button>
                  <span>By signing up, you agree to our <b>Terms, Data Policy</b> and <b>Cookies Policy</b>.</span>
                </div>
              </form>
            </div>
            <div className="SignUp">
              <span>Have an account?</span>
              <Link to="/login">Log in</Link>
            </div>
            <div className="Text">
              Get the app.
              </div>
            <div className="Get-the-app">
              <img src={instar3} alt="img" />
              <img src={instar4} alt="img" />
            </div>
          </div>

        </div>
        <div className="row">
          <div className="Signup-footer d-xl-flex">
            <div className="Signup-footer-link col-xl-9 col-6 mx-auto">
              <a href="/">about</a>
              <a href="/">help</a>
              <a href="/">press</a>
              <a href="/">api</a>
              <a href="/">jobs</a>
              <a href="/">privacy</a>
              <a href="/">terms</a>
              <a href="/">locations</a>
              <a href="/">top accounts</a>
              <a href="/">hashtags</a>
              <a href="/">lagguage</a>
            </div>
            <div className="Signup-footer-info mt-3 mt-xl-0">
              © 2020 INSTAGRAM FROM FACEBOOK
            </div>
          </div>
        </div>
      </Container>
    </div >
  )
}
export default Signup;