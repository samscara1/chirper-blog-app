import React, { useState } from 'react';
import { createComment } from '../../firebase-service';

export const CommentForm = ({ post, postID, hideComment }) => {
  const [comment, setComment] = useState('');

  const handlePostComment = async () => {
    await createComment(post, postID, comment);
    hideComment(false);
  };
  return (
    <section>
      <textarea name="" id="" cols="30" rows="10" value={comment} onChange={(e) => setComment(e.target.value)} />
      <button type="submit" onClick={handlePostComment}>post a comment</button>
      <button type="button" onClick={() => hideComment(false)}>cancel</button>
    </section>
  );
};
