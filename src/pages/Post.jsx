import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { deleteDoc, doc } from 'firebase/firestore';
import { getDocumentData } from '../firebase-service';
import { db, auth } from '../firebase-config';
import { EditPost } from '../components/EdutPost/EditPost';

export const Post = () => {
  const [post, setPost] = useState({});
  const [edit, setEdit] = useState(false);
  const [pending, setPending] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();
  const userID = auth.currentUser.uid;

  useEffect(async () => {
    const postData = await getDocumentData(id);
    setPost(postData);
    setPending(false);
  }, [edit]);

  const handleDeletePost = async () => {
    await deleteDoc(doc(db, 'posts', id));
    navigate('/');
    console.log(post);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <section>
      <p>
        @
        {post.author.name}
      </p>
      <h3>{post.title}</h3>
      {edit
        ? <EditPost text={post.post} postID={id} hideEdit={setEdit} />
        : (
          <div>
            <p>{post.post}</p>
            {
              (userID === post.author.id) && (
              <div>
                <button type="button" onClick={handleEdit}>edit post</button>
                <button type="button" onClick={handleDeletePost}>delete post</button>
                <button type="button" onClick={() => navigate('/')}>go back</button>
              </div>
              )
      }
          </div>
        )}
      <p>{post.time}</p>
      {post.comments?.map((comment) => {
        return <p>{comment.name}</p>;
      })}
    </section>
  );
};
