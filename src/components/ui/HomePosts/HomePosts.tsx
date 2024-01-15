import React from 'react';
import {
  FeaturedPost,
  FeaturedPostProps,
} from '@/components/ui/FeaturedPost/FeaturedPost';
import { HomeAllPosts } from '@/components/ui/HomeAllPosts/HomeAllPosts';
import styles from './HomePosts.module.scss';

type HomePostsProps = FeaturedPostProps;

export const HomePosts = ({
  imageURL,
  alt,
  author,
  date,
  text,
  title,
}: HomePostsProps) => (
    <section className={`${styles.section} section container`}>
      <FeaturedPost
        imageURL={imageURL}
        alt={alt}
        author={author}
        date={date}
        title={title}
        text={text}
      />
      <HomeAllPosts />
    </section>
  );
