import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { PostList } from '../components/PostList/PostList';

export const Home = () => {
  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
      });
  };
  return (
    <div>
      {localStorage.user ? <p>{localStorage.user}</p> : <p>no user</p>}
      <button type="button" onClick={signUserOut}>log out</button>
      <PostList />
    </div>
  );
};
