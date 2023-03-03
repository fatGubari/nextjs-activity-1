import React from 'react'
import styles from '../../styles/Home.module.css'

export async function getStaticPaths() {
  const res = await fetch(`https://dummyjson.com/posts`);
  const data = await res.json();
  const paths = data.posts.map((post) => ({
    params: { pid: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://dummyjson.com/posts/${params.pid}`);
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}

export default function Post({ post }) {
  return (
    <main className={styles.main}>
      <p>single post</p>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </main>
  )
}


/*
Another Way To fetch the Api For one time 

just commit the upper one and un commit the next one 
it shold work the same 
*/


/*

import Link from 'next/link';
import React from 'react'
import styles from '../../styles/Home.module.css'

export async function getStaticPaths() {
  const res = await fetch(`https://dummyjson.com/posts`);
  const data = await res.json();
  const paths = data.posts.map((post) => ({
    params: { pid: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://dummyjson.com/posts`);
  const data = await res.json();
  const post = data.posts.find((post) => post.id.toString() === params.pid);
  return {
    props: {
      posts: data,
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <main className={styles.main}>
      <p>single post</p>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </main>
  )
}

*/