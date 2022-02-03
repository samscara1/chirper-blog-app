import React from 'react';
import { Link } from 'react-router-dom';

export const Post = ({
  author,
  title,
  post,
  commentsNumber,
  time,
}) => {
  return (
    <Link to="404">
      <p>
        @
        {author}
      </p>
      <h3>{title}</h3>
      <p>{post}</p>
      <p>{time}</p>
      <p>
        comments:
        {' '}
        {commentsNumber}
      </p>
    </Link>
  );
};
