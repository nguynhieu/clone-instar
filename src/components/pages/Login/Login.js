import React from 'react';
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

import './Login.css'
import instar2 from '../../../public/images/instar2.png'
import instar3 from '../../../public/images/instar3.png'
import instar4 from '../../../public/images/instar4.png'

const Login = () => {
  return (
    <div className="Login-wrapper">
      <Container>
        <div className="Login-header row">
          <div clasName="Login-img col">
            <img src={instar2} alt="Img" className="d-none d-lg-block" />
          </div>
          <div className="Login-form">
            <div className="Login">
              <div className="Login-logo" />
              <form>
                <div className="Login-action">
                  {/* {errors && <div className="Login-err">{errors}</div>} */}
                  <div className="Login-action-account">
                    <input
                      id="Form-account"
                      name="account"
                      required
                      type="text"
                    />
                    <label htmlFor="Form-account">
                      Phone number, usename or email
                    </label>
                  </div>
                  <div className="Login-action-password">
                    <input
                      id="Form-password"
                      name="password"
                      required
                      type="password"
                    />
                    <label htmlFor="Form-password">Password</label>
                  </div>
                  <button
                    type="submit"
                    className={classNames({
                      "Login-btn": true,
                      // "Show-click": showLoginBtn
                    })}
                  >
                    Log in
                  </button>
                  <hr />
                </div>
              </form>
              <a href="/">Forgot password?</a>
            </div>
            <div className="SignUp">
              <span>Don't have an account?</span>
              <Link to="/signup">Sign Up</Link>
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
          <div className="Login-footer d-xl-flex">
            <div className="Login-footer-link col-xl-9 col-6 mx-auto">
              <a href="#">about</a>
              <a href="#">help</a>
              <a href="#">press</a>
              <a href="#">api</a>
              <a href="#">jobs</a>
              <a href="#">privacy</a>
              <a href="#">terms</a>
              <a href="#">locations</a>
              <a href="#">top accounts</a>
              <a href="#">hashtags</a>
              <a href="#">lagguage</a>
            </div>
            <div className="Login-footer-info mt-3 mt-xl-0">
              © 2020 INSTAGRAM FROM FACEBOOK
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Login;