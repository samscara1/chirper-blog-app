import React from 'react';
import { Link } from 'react-router-dom';

export const Post = ({
  author,
  title,
  post,
  commentsNumber,
  time,
  id,
}) => {
  return (
    <Link to={`/${id}`}>
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
