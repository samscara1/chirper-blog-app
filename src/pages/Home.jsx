import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

export const Home = () => {
  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
      });
  };
  return (
    <div>
      Home
      <button type="button" onClick={signUserOut}>log out</button>
    </div>
  );
};
