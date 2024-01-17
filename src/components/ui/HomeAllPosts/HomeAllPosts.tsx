import React from 'react';
import { useTranslations } from 'next-intl';
import { POSTS } from '@/constants/posts';
import { HomePost } from '@/components/ui/HomePost/HomePost';
import styles from './HomeAllPosts.module.scss';

export const HomeAllPosts = () => {
  const t = useTranslations('home.allPosts');

  return (
    <article className={styles.section}>
      <div className={styles.header}>
        <h2 className='heading2'>{t('title')}</h2>
        <button type='button' className={`${styles.viewAll} body1`}>
          {t('button')}
        </button>
      </div>
      <ul>
        {[...new Array(4)]
          .map((_, ind) => ({ ...POSTS[0], id: POSTS[0].id + ind }))
          .map((post) => (
            <li>
              <HomePost
                key={post.id}
                author={post.author}
                date={post.date}
                title={post.title}
              />
            </li>
          ))}
      </ul>
    </article>
  );
};
