import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import { BlogCard, BlogCardProps } from '@/components/ui/BlogCard/BlogCard';
import styles from './FeaturedPost.module.scss';

export type FeaturedPostProps = BlogCardProps;

export const FeaturedPost = ({
  imageURL,
  alt,
  author,
  title,
  text,
  date,
}: FeaturedPostProps) => (
    <article className={styles.article}>
      <h2 className={`${styles.header} heading2`}>Featured Post</h2>
      <div className={styles.wrapper}>
        <BlogCard
          imageURL={imageURL}
          alt={alt}
          title={title}
          text={text}
          author={author}
          date={date}
        />
        <Button className={styles.button}>Read More {'>'}</Button>
      </div>
    </article>
  );
