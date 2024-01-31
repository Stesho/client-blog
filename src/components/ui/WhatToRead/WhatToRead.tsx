import React from 'react';
import { BlogCard } from '@/components/ui/BlogCard/BlogCard';
import { Post } from '@/types/post';
import { Link } from '@/navigation';
import { ROUTES } from '@/constants/routes';
import styles from './WhatToRead.module.scss';

interface WhatToReadProps {
  posts: Post[];
}

export const WhatToRead = ({ posts }: WhatToReadProps) => (
  <section className='section container'>
    <h2 className={`${styles.header} heading2`}>What to read next</h2>
    <ul className={styles.list}>
      {posts.slice(0, 3).map((post) => (
        <li key={post.id} className={styles.listItem}>
          <Link href={`${ROUTES.blog}/${post.id}`}>
            <BlogCard
              alt={post.title}
              author={post.author.name}
              date={post.date}
              imageURL={post.image}
              text={post.text}
              title={post.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  </section>
);
