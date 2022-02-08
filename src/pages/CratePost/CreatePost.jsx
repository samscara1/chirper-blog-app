import React, { useState } from 'react';
import { CreatePostButtonBlock } from './components/CreatePostButtonBlock/CreatePostButtonBlock';
// import { useNavigate } from 'react-router';

// import { createPost } from '../../firebase-service';

export const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  // const navigate = useNavigate();

  // const handleClick = async () => {
  //   if (!title || !post) {
  //     return;
  //   }
  //   await createPost(title, post);
  //   navigate('/');
  // };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <textarea
        cols="30"
        rows="10"
        onChange={(e) => {
          setPost(e.target.value);
        }}
        value={post}
      />
      {/* <button type="submit" onClick={handleClick}>submit post</button> */}
      <CreatePostButtonBlock title={title} post={post} />
    </div>
  );
};
