import React from 'react';
import { useNavigate } from 'react-router';
import { loginWithGoogle } from '../../firebase-service';

export const GoogleSignIn = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    await loginWithGoogle();
    navigate('/');
  };
  return <button type="button" onClick={handleClick}>Sign in with Google</button>;
};
