import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

import { auth, provider } from './firebase-config';

export const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    localStorage.setItem('user', auth.currentUser.email);
  } catch (error) {
    console.log(error.message);
  }
};

export const signupWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    localStorage.setItem('user', auth.currentUser.email);
  } catch (error) {
    console.log(error.message);
  }
};

export const loginWithGoogle = async () => {
  await signInWithPopup(auth, provider);
  localStorage.setItem('user', auth.currentUser.email);
};
