import React from 'react';
import heart from '../../public/images/heart.svg'
import heart2 from '../../public/images/heart2.svg'

const Post = (props) => {
  return (
    <div className="Post">
      <div className="Post-header">
        {props.img &&
          <div className="Post-header-avatar">

          </div>
        }

        <div className="Post-header-username">
          {props.username}
        </div>
        <div className="Post-header-option">
        </div>
      </div>
      <div className="Post-body">
        <img src={props.img} alt="img" />
      </div>
      <div className="Post-footer">
        <div className="Post-footer-action">
          <div className="Post-footer-heart">
            {heart}
          </div>
        </div>
        <div className="Post-footer-status">

        </div>
        <div className="Post-footer-comments">

        </div>
        <input placeholder="Add a comment..." />
      </div>
    </div>
  )
}