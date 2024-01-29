import React from 'react';
import { Post } from '@/types/post';
import { BlogPostCard } from '@/components/ui/BlogPostCard/BlogPostCard';
import styles from './AuthorPosts.module.scss';

interface AuthorPostsProps {
  posts: Post[];
}

export const AuthorPosts = ({ posts }: AuthorPostsProps) => (
  <section className='section container'>
    <h2 className={`${styles.title} heading1`}>My Posts</h2>
    <ul>
      {posts.map((post) => (
        <li key={post.id} className={styles.postsItem}>
          <BlogPostCard post={post} />
        </li>
      ))}
    </ul>
  </section>
);
