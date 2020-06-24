import React, { useContext, useEffect } from 'react'
import io from 'socket.io-client'

import './Home.css'

let socket;

const Home = () => {
  const ENDPOINT = 'localhost:5000'

  useEffect(() => {
    socket = io(ENDPOINT);
  })

  return (
    <div className="Home">
      Home page
    </div>
  );
}

export default Home;