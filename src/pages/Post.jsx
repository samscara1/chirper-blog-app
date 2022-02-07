import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import {
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { nanoid } from 'nanoid';
import { getDocumentData } from '../firebase-service';
import { db, auth } from '../firebase-config';
import { EditPost } from '../components/EdutPost/EditPost';
import { CommentForm } from '../components/CommentForm/CommentForm';
import { Comment } from '../components/Comment/Comment';

export const Post = () => {
  const [post, setPost] = useState({});
  const [edit, setEdit] = useState(false);
  const [refreshComments, setRefreshComments] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [pending, setPending] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();
  const userID = auth.currentUser.uid;

  useEffect(async () => {
    const postData = await getDocumentData(id);
    if (!postData) {
      navigate('404');
    }
    setPost(postData);
    setPending(false);
  }, [edit, showComment, refreshComments]);

  const handleDeletePost = async () => {
    await deleteDoc(doc(db, 'posts', id));
    navigate('/');
  };

  const handleEdit = async () => {
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
              </div>
              )
            }
            <button type="button" onClick={() => setShowComment(true)}>leave a comment</button>
            <button type="button" onClick={() => navigate('/')}>go back</button>
          </div>
        )}
      <p>{post.time}</p>
      {showComment && <CommentForm post={post} postID={id} hideComment={setShowComment} />}
      {post.comments?.map((comment) => {
        return (
          <Comment
            author={comment.commentAuthor}
            authorID={comment.commentAuthorId}
            commentText={comment.commentText}
            date={comment.date}
            postID={id}
            commentID={comment.commentId}
            comments={post.comments}
            key={nanoid()}
            refreshComments={setRefreshComments}
            commentsFlag={refreshComments}
          />
        );
      })}
    </section>
  );
};
