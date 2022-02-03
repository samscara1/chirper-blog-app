import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { Form } from '../UI/Form/Form';

import { GoogleSignIn } from '../components/GoogleSignIn/GoogleSignIn';
import { signupWithEmailAndPassword } from '../firebase-service';

export const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (email, password) => {
    await signupWithEmailAndPassword(email, password);
    navigate('/');
  };

  return (
    <section>
      <GoogleSignIn />
      <p>sign up with e-mail</p>
      <Form handleClick={handleRegister} btnTitle="register" />
      <p>
        Already have an account?
        {' '}
        <Link to="/login">log in</Link>
      </p>
    </section>
  );
};
