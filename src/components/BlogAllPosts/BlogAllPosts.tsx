'use client';

import React, { useState } from 'react';
import { BlogPostCard } from '@/components/ui/BlogPostCard/BlogPostCard';
import { POSTS } from '@/constants/posts';
import styles from './BlogAllPosts.module.scss';

export const BlogAllPosts = () => {
  const [page, setPage] = useState(0);
  const displayItemsCount = 5;

  const onNext = () => setPage((prev) => prev + 1);
  const onPrev = () => setPage((prev) => prev - 1);

  const isPrevDisabled = () => page === 0;
  const isNextDisabled = () =>
    page + 1 === Math.ceil(POSTS.length / displayItemsCount);

  return (
    <section className='section container'>
      <h2 className={`${styles.header} heading1`}>All posts</h2>
      <ul className={styles.list}>
        {POSTS.slice(
          page * displayItemsCount,
          page * displayItemsCount + displayItemsCount,
        ).map((post) => (
          <li
            key={post.id}
            className={styles.listItem}
            data-testid={`post${post.id}`}
          >
            <BlogPostCard post={post} />
          </li>
        ))}
      </ul>
      <div className={styles.buttons}>
        <button
          disabled={isPrevDisabled()}
          onClick={onPrev}
          type='button'
          className={`${styles.controller} heading3`}
          data-testid='prevButton'
        >
          {'<'} Prev
        </button>
        <button
          disabled={isNextDisabled()}
          onClick={onNext}
          type='button'
          className={`${styles.controller} heading3`}
          data-testid='nextButton'
        >
          Next {'>'}
        </button>
      </div>
    </section>
  );
};
