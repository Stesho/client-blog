import React from 'react';
import { BlogPostCard } from '@/components/ui/BlogPostCard/BlogPostCard';
import { POSTS } from '@/constants/posts';
import styles from './BlogAllPosts.module.scss';

export const BlogAllPosts = () => (
    <section className="section container">
      <h2 className={`${styles.header} heading1`}>All posts</h2>
      <ul className={styles.list}>
        {POSTS.map((post) => (
          <li key={post.id}>
            <BlogPostCard
              imageURL={post.image}
              alt={post.type}
              type={post.type}
              title={post.title}
              text={post.text}
            />
          </li>
        ))}
      </ul>
      <div className={styles.buttons}>
        <button type='button' className={`${styles.controller} heading3`}>
          {'<'} Prev
        </button>
        <button type='button' className={`${styles.controller} heading3`}>
          Next {'>'}
        </button>
      </div>
    </section>
  );
