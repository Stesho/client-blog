import React from 'react';
import { useTranslations } from 'next-intl';

import { HomePost } from '@/components/ui/HomePost/HomePost';
import { POSTS } from '@/constants/posts';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/navigation';

import styles from './HomeAllPosts.module.scss';

export const HomeAllPosts = () => {
  const t = useTranslations('home.allPosts');

  return (
    <article className={styles.section}>
      <div className={styles.header}>
        <h2 className='heading2'>{t('title')}</h2>
        <Link href={ROUTES.blog}>
          <button type='button' className={`${styles.viewAll} body1`}>
            {t('button')}
          </button>
        </Link>
      </div>
      <ul>
        {POSTS.slice(0, 4).map((post) => (
          <li id={post.id}>
            <Link href={`${ROUTES.blog}/${post.id}`}>
              <HomePost
                key={post.id}
                author={post.author.name}
                date={post.date}
                title={post.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};
