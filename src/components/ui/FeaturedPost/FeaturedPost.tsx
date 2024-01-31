import React from 'react';
import { useTranslations } from 'next-intl';

import { BlogCard } from '@/components/ui/BlogCard/BlogCard';
import { Button } from '@/components/ui/Button/Button';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/navigation';
import { Post } from '@/types/post';

import styles from './FeaturedPost.module.scss';

interface FeaturedPostProps {
  post: Post;
}

export const FeaturedPost = ({
  post: { id, image, date, text, title, author },
}: FeaturedPostProps) => {
  const t = useTranslations('home');

  return (
    <article className={styles.article}>
      <h2 className={`${styles.header} heading2`}>{t('featuredPost.title')}</h2>
      <div className={styles.wrapper}>
        <BlogCard
          imageURL={image}
          alt={title}
          title={title}
          text={text}
          author={author.name}
          date={date}
        />
        <Link href={`${ROUTES.blog}/${id}`}>
          <Button className={styles.button}>
            {t('readMore')} {'>'}
          </Button>
        </Link>
      </div>
    </article>
  );
};
