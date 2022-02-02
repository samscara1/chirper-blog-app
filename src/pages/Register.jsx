import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { auth } from '../firebase-config';

import { Form } from '../UI/Form/Form';

import { GoogleSignIn } from '../components/GoogleSignIn/GoogleSignIn';

// import { Form } from './components/Form';

export const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(
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
    <section>
      <Form handleClick={handleRegister} btnTitle="register" />
      <GoogleSignIn />
      <p>
        Already have an account?
        {' '}
        <Link to="/login">log in</Link>
      </p>
    </section>
  );
};
