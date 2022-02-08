import React from 'react';
import { useNavigate } from 'react-router';

import { createPost } from '../../../../firebase-service';

import { Button } from '../../../../UI/Button/Button';

export const CreatePostButtonBlock = ({ title, post }) => {
  const navigate = useNavigate();

  const handlePost = async () => {
    if (!title || !post) {
      return;
    }
    await createPost(title, post);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <Button
        title="Submit a post"
        handleClick={handlePost}
        bkgColor="#4C9EEB"
        bkgColorHover="#007AFF"
        txtColor="#FFFFFF"
      />
      <Button
        title="Cancel"
        handleClick={handleCancel}
        bkgColor="#4C9EEB"
        bkgColorHover="#007AFF"
        txtColor="#FFFFFF"
      />
    </div>
  );
};
