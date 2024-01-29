import React from 'react';
import { FeaturedPost } from '@/components/ui/FeaturedPost/FeaturedPost';
import { HomeAllPosts } from '@/components/ui/HomeAllPosts/HomeAllPosts';
import { Post } from '@/types/post';
import styles from './HomePosts.module.scss';

interface HomePostsProps {
  post: Post;
}

export const HomePosts = ({ post }: HomePostsProps) => (
  <section className={`${styles.section} section container`}>
    <FeaturedPost post={post} />
    <HomeAllPosts />
  </section>
);
