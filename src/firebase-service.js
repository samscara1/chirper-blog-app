import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  collection,
  addDoc,
  getDoc,
  setDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { nanoid } from 'nanoid';

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
  } catch (error) {
    console.log(error.message);
  }
};

export const createComment = async (post, postID, comment) => {
  await setDoc(doc(db, 'posts', postID), {
    comments: [...post.comments, {
      commentText: comment,
      commentAuthor: auth.currentUser.email,
      commentAuthorId: auth.currentUser.uid,
      date: getDateAndTime(),
      commentId: nanoid(),
    }],
  }, { merge: true });
};

export const DeleteComment = async (comments, commentId, postID) => {
  const postRef = doc(db, 'posts', postID);
  await updateDoc(postRef, {
    comments: comments.filter((comment) => comment.commentId !== commentId),
  });
};

export const getDocumentData = async (id) => {
  const docRef = doc(db, 'posts', id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
