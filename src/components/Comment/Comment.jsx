import React from 'react';

import { auth } from '../../firebase-config';
import { DeleteComment } from '../../firebase-service';

export const Comment = ({
  author,
  authorID,
  commentText,
  date,
  postID,
  commentID,
  comments,
  refreshComments,
  commentsFlag,
}) => {
  const handleClick = () => {
    DeleteComment(comments, commentID, postID);
    refreshComments(!commentsFlag);
  };

  return (
    <section>
      {author}
      {' '}
      commented
      {' '}
      {commentText}
      {' '}
      on
      {' '}
      {date}
      { (authorID === auth.currentUser.uid)
        && (
        <button
          type="button"
          onClick={handleClick}
        >
          delete comment
        </button>
        ) }
    </section>
  );
};
