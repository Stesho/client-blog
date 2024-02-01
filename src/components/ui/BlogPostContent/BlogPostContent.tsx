import React from 'react';
import Image from 'next/image';

import { Post } from '@/types/post';

import styles from './BlogPostContent.module.scss';

interface BlogPostContentProps {
  post: Post;
}

export const BlogPostContent = ({ post }: BlogPostContentProps) => (
  <section className='container section'>
    <Image className={styles.image} src={post.image} alt={post.title} />
    <p className={`${styles.text} body1`}>{post.text}</p>
  </section>
);
