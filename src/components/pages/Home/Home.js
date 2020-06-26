import React, { useContext, useEffect } from 'react'
import io from 'socket.io-client'

import CreateNewFeed from '../../CreateNewFeed/CreateNewFeed';
import { UserContext } from '../../../contexts/User';
import { PostContext } from '../../../contexts/Post';
import avatar from '../../../public/images/avatar.png'
import Post from '../../Post/Post';
import Loading from '../../Loading/Loading'

import './Home.css'

let socket;

const Home = () => {
  const ENDPOINT = 'localhost:5000'

  const { isLoaded } = useContext(PostContext)
  const { currentUser } = useContext(UserContext)
  const { posts } = useContext(PostContext)

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('user-join-room', currentUser.username)
  })

  if (isLoaded === false) {
    return <Loading />
  }

  return (
    <div className="container">
      <div className="Home row">
        <div className="Main">
          <CreateNewFeed />
          {
            posts.length &&
            posts.map((post, index) =>
              <Post key={index} {...post} socket={socket} />
            )
          }
        </div>
        <div className="Sidebar d-none d-lg-block">
          <div className="Sidebar-header">
            {
              currentUser.avatar &&
              <img src={currentUser.avatar} alt="" />
            }
            {
              !currentUser.avatar &&
              <img src={avatar} alt="" />
            }
            <div className="Sidebar-info">
              <p>{currentUser.username}</p>
              <p>{currentUser.fullname}</p>
            </div>
          </div>
          <div className="Sidebar-body">
            <div className="Sidebar-body-text">
              <p>Suggestion For You</p>
              <a href="/">See all</a>
            </div>
            <div className="Sidebar-list">
              <div className="Sidebar-list-user">
                <div className="Sidebar-list-user-info">
                  <img src={avatar} alt="" />
                  <div className="Sidebar-list-status">
                    <p>dangcongkhaithu</p>
                    <p>Friend on facebook</p>
                  </div>
                </div>
                <div className="Sidebar-follow">Follow</div>
              </div>
              <div className="Sidebar-list-user">
                <div className="Sidebar-list-user-info">
                  <img src={avatar} alt="" />
                  <div className="Sidebar-list-status">
                    <p>cup.hoc</p>
                    <p>Friend on facebook</p>
                  </div>
                </div>
                <div className="Sidebar-follow">Follow</div>
              </div>
              <div className="Sidebar-list-user">
                <div className="Sidebar-list-user-info">
                  <img src={avatar} alt="" />
                  <div className="Sidebar-list-status">
                    <p>tuann_trungg</p>
                    <p>Friend on facebook</p>
                  </div>
                </div>
                <div className="Sidebar-follow">Follow</div>
              </div>
              <div className="Sidebar-list-user">
                <div className="Sidebar-list-user-info">
                  <img src={avatar} alt="" />
                  <div className="Sidebar-list-status">
                    <p>nhatthien183</p>
                    <p>Friend on facebook</p>
                  </div>
                </div>
                <div className="Sidebar-follow">Follow</div>
              </div>
              <div className="Sidebar-list-user">
                <div className="Sidebar-list-user-info">
                  <img src={avatar} alt="" />
                  <div className="Sidebar-list-status">
                    <p>dangcongkhaithu</p>
                    <p>Friend on facebook</p>
                  </div>
                </div>
                <div className="Sidebar-follow">Follow</div>
              </div>
            </div>
          </div>
          <div className="Sidebar-footer">
            <a href="/">About</a>
            <a href="/">Help</a>
            <a href="/">Press</a>
            <a href="/">API</a>
            <a href="/">Jobs</a>
            <a href="/">About</a>
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
            <a href="/">Locations</a>
            <a href="/">Top Accounts</a>
            <a href="/">Hashtags</a>
            <a href="/">Language</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;