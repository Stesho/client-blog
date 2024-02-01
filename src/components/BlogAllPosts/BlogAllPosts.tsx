'use client';

import React, { useState } from 'react';
import classNames from 'classnames';

import { BlogPostCard } from '@/components/ui/BlogPostCard/BlogPostCard';
import { POSTS } from '@/constants/posts';

import styles from './BlogAllPosts.module.scss';

interface BlogAllPostsProps {
  messages: {
    title: string;
    prevButton: string;
    nextButton: string;
  };
}

export const BlogAllPosts = ({ messages }: BlogAllPostsProps) => {
  const [page, setPage] = useState(0);
  const [isHideAnimation, setIsHideAnimation] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const displayItemsCount = 5;

  const changePage = (callback: () => void) => {
    setIsHideAnimation(true);
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsHideAnimation(false);
      setIsButtonDisabled(false);
      callback();
    }, 290);
  };

  const onNext = () => {
    changePage(() => {
      setPage((prev) => prev + 1);
    });
  };

  const onPrev = () => {
    changePage(() => {
      setPage((prev) => prev - 1);
    });
  };

  const isPrevDisabled = () => page === 0;
  const isNextDisabled = () =>
    page + 1 === Math.ceil((POSTS.length * 2) / displayItemsCount);

  return (
    <section className='section container'>
      <h2 className={`${styles.header} heading1`}>{messages.title}</h2>
      <ul className={styles.list}>
        {[...POSTS, ...POSTS]
          .slice(
            page * displayItemsCount,
            page * displayItemsCount + displayItemsCount,
          )
          .map((post) => (
            <li
              key={post.id}
              className={classNames(styles.listItem, {
                [styles.hide]: isHideAnimation,
              })}
              data-testid={`post${post.id}`}
            >
              <BlogPostCard post={post} />
            </li>
          ))}
      </ul>
      <div className={styles.buttons}>
        <button
          disabled={isPrevDisabled() || isButtonDisabled}
          onClick={onPrev}
          type='button'
          className={classNames(styles.controller, 'heading3', {
            [styles.disabledController]: isPrevDisabled(),
          })}
          data-testid='prevButton'
        >
          {'<'} {messages.prevButton}
        </button>
        <button
          disabled={isNextDisabled() || isButtonDisabled}
          onClick={onNext}
          type='button'
          className={classNames(styles.controller, 'heading3', {
            [styles.disabledController]: isNextDisabled(),
          })}
          data-testid='nextButton'
        >
          {messages.nextButton} {'>'}
        </button>
      </div>
    </section>
  );
};
