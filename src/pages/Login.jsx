import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';

import { auth } from '../firebase-config';

import { Form } from '../UI/Form/Form';
import { GoogleSignIn } from '../components/GoogleSignIn/GoogleSignIn';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      localStorage.setItem('user', auth.currentUser.email);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <GoogleSignIn />
      <p>sign in with e-mail</p>
      <Form handleClick={handleLogin} btnTitle="sign in" />
    </div>
  );
};
