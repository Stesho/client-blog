import React from 'react';
import { POSTS } from '@/constants/posts';
import { BlogCard } from '@/components/ui/BlogCard/BlogCard';
import styles from './WhatToRead.module.scss';

export const WhatToRead = () => (
  <section className='section container'>
    <h2 className={`${styles.header} heading2`}>What to read next</h2>
    <ul className={styles.list}>
      {POSTS.slice(0, 3).map((post) => (
        <li key={post.id}>
          <BlogCard
            alt={post.title}
            author={post.author}
            date={post.date}
            imageURL={post.image}
            text={post.text}
            title={post.title}
          />
        </li>
      ))}
    </ul>
  </section>
);
