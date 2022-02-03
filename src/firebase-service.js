import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

import { auth, provider, db } from './firebase-config';

import { getDateAndTime } from './helpers/getDateAndTime';

const postsColectionRef = collection(db, 'posts');

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

export const createPost = async (title, post) => {
  try {
    await addDoc(
      postsColectionRef,
      {
        title,
        post,
        author: {
          name: auth.currentUser.email,
          id: auth.currentUser.uid,
        },
        comments: [],
        time: getDateAndTime(),
      },
    );
    // console.log(date);
  } catch (error) {
    console.log(error.message);
  }
};
