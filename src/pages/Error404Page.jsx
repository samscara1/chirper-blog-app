import React from 'react';
import { useNavigate } from 'react-router';

export const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>404</div>
      <button type="button" onClick={() => navigate('/')}>go back</button>
    </div>
  );
};
