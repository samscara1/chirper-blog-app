import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth, provider } from '../../firebase-config';

export const GoogleSignIn = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    localStorage.setItem('user', auth.currentUser.email);
    navigate('/');
  };
  return <button type="button" onClick={signInWithGoogle}>Sign in with Google</button>;
};
