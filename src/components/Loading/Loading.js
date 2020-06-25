import React from 'react';

import './Loading.css'
import LoadingImg from '../../public/images/loading.svg'

const Loading = () => {
  return (
    <div className="Loading">
      <img src={LoadingImg} alt="" />
    </div>
  )
}

export default Loading;