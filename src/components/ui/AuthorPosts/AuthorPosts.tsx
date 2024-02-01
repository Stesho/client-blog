import React from 'react';
import { useTranslations } from 'next-intl';

import { BlogPostCard } from '@/components/ui/BlogPostCard/BlogPostCard';
import { Post } from '@/types/post';

import styles from './AuthorPosts.module.scss';

interface AuthorPostsProps {
  posts: Post[];
}

export const AuthorPosts = ({ posts }: AuthorPostsProps) => {
  const t = useTranslations('author');

  return (
    <section className='section container'>
      <h2 className={`${styles.title} heading1`}>{t('posts')}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className={styles.postsItem}>
            <BlogPostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};
