import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { Form } from '../UI/Form/Form';

import { GoogleSignIn } from '../components/GoogleSignIn/GoogleSignIn';

import { loginWithEmailAndPassword } from '../firebase-service';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    await loginWithEmailAndPassword(email, password);
    navigate('/');
  };

  return (
    <div>
      <GoogleSignIn />
      <p>sign in with e-mail</p>
      <Form handleClick={handleLogin} btnTitle="sign in" />
      <p>
        New here?
        {' '}
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
};
