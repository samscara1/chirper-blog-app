import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

export const EditPost = ({ text, postID, hideEdit }) => {
  const [editedText, setEditedText] = useState(text);

  const handleEditPost = async () => {
    await setDoc(doc(db, 'posts', postID), { post: editedText }, { merge: true });
    hideEdit(false);
    console.log(editedText);
  };

  return (
    <section>
      <textarea name="" id="" cols="30" rows="10" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
      <button
        type="submit"
        onClick={handleEditPost}
      >
        edit post
      </button>
      <button
        type="submit"
        onClick={() => hideEdit(false)}
      >
        cancel
      </button>
    </section>
  );
};
