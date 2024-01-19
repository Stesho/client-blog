import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import { BlogCard } from '@/components/ui/BlogCard/BlogCard';
import { useTranslations } from 'next-intl';
import { Post } from '@/types/post';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import styles from './FeaturedPost.module.scss';

interface FeaturedPostProps {
  post: Post;
}

export const FeaturedPost = ({
  post: { id, image, author, date, text, title },
}: FeaturedPostProps) => {
  const t = useTranslations('home.featuredPost');

  return (
    <article className={styles.article}>
      <h2 className={`${styles.header} heading2`}>{t('title')}</h2>
      <div className={styles.wrapper}>
        <BlogCard
          imageURL={image}
          alt={title}
          title={title}
          text={text}
          author={author}
          date={date}
        />
        <Link href={`${ROUTES.blog}/${id}`}>
          <Button className={styles.button}>Read More {'>'}</Button>
        </Link>
      </div>
    </article>
  );
};
