import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

import { auth } from '../firebase-config';

import { Form } from './components/Form';

export const Register = () => {
  const handleRegister = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(user);
      console.log(!!auth.currentUser);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section>
      <Form handleClick={handleRegister} btnTitle="Register" />
      <p>
        Already have an account?
        {' '}
        <Link to="/login">log in</Link>
      </p>
    </section>
  );
};
