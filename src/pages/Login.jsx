/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../firebase-config';

import { AuthContext } from '../router/AuthProvider';

// eslint-disable-next-line react/prop-types
export const Login = ({ setIsAuth }) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem('user', auth.currentUser.displayName);
        setIsAuth(true);
        console.log(res);
      });
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
      );
      console.log(user);
      console.log(!!auth.currentUser);
    } catch (error) {
      console.log(error.message);
    }
  };

  const showUser = () => {
    const { currentUser } = useContext(AuthContext);
    console.log('curentUser', currentUser);
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );
      console.log(user);
      console.log(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <p>sign in</p>
      <button type="button" onClick={signInWithGoogle}>Sign in</button>
      <p>sign up with e-mail</p>
      <input type="email" placeholder="e-mail" onChange={(e) => { setRegisterEmail(e.target.value); }} />
      <input type="password" placeholder="password" onChange={(e) => { setRegisterPassword(e.target.value); }} />
      <button type="submit" onClick={register}>sign up with e-mail</button>
      <input type="email" placeholder="e-mail" onChange={(e) => { setLoginEmail(e.target.value); }} />
      <input type="password" placeholder="password" onChange={(e) => { setLoginPassword(e.target.value); }} />
      <button type="submit" onClick={login}>sign in with e-mail</button>
      <button type="submit" onClick={showUser}>show user</button>
    </div>
  );
};
