import React, { useState, useContext } from 'react';

import './CreateNewFeed.css'
import { PostContext } from '../../contexts/Post';
import { UserContext } from '../../contexts/User';

const CreateNewFeed = (props) => {
  const { handlePost } = useContext(PostContext);
  const { currentUser } = useContext(UserContext);

  const [file, setFile] = useState(null)
  const [caption, setCaption] = useState('')

  return (
    <div className="CreateNewFeed">
      <h3>Make a Post</h3>
      <form
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          handlePost(currentUser._id, caption, file, currentUser.username, props.socket);
          setFile(null);
          setCaption('');
        }}
      >
        <textarea
          name="caption"
          placeholder="What's up man?"
          onChange={e => setCaption(e.target.value)}
          required
          value={caption}
        />
        <input
          type="file"
          className="CreateNewFeed-img"
          name="image"
          onChange={e => setFile(e.target.files[0])}
        />
        <button>
          +
        </button>
      </form>
    </div>
  )
}

export default CreateNewFeed