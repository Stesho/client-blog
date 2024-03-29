import React from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/Button/Button';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/navigation';
import { Post } from '@/types/post';

import styles from './HomeInfo.module.scss';

interface HomeInfoProps {
  post: Post;
}

export const HomeInfo = ({ post }: HomeInfoProps) => {
  const t = useTranslations('home');
  const maxTextLetters = 150;

  return (
    <section className={`${styles.section} section topSection`}>
      <div className='container'>
        <span className={styles.postedOn}>
          Posted on <span>{post.type}</span>
        </span>
        <h1 className={`${styles.header} display`}>{post.title}</h1>
        <span className='body1'>
          By <span className={styles.author}>{post.author.name}</span> |{' '}
          {post.date}
        </span>
        <p className={`${styles.text} body1`}>
          {post.text.slice(0, maxTextLetters)}
        </p>
        <Link href={`${ROUTES.blog}/${post.id}`}>
          <Button>
            {t('readMore')} {'>'}
          </Button>
        </Link>
      </div>
    </section>
  );
};
