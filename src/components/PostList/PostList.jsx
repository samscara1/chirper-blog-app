import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { nanoid } from 'nanoid';

import { db } from '../../firebase-config';

import { Post } from '../Post/Post';

export const PostList = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      setPostList(data.docs);
    };
    getPosts();
  }, []);
  return (
    <section>
      {postList.map((post) => {
        return (
          <Post
            author={post.data().author.name}
            title={post.data().title}
            post={post.data().post}
            commentsNumber={post.data().comments.length}
            time={post.data().time}
            key={nanoid()}
            id={post.id}
          />
        );
      })}
    </section>
  );
};
