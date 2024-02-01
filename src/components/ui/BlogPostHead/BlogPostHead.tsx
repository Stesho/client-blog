import React from 'react';
import Image from 'next/image';

import Shuttle from '@/assets/img/category/shuttle.png';
import Author from '@/assets/img/home/review-author-1.jpg';
import { Author as AuthorType } from '@/types/author';

import styles from './BlogPostHead.module.scss';

interface BlogPostHeadProps {
  author: AuthorType;
  postedDate: string;
  title: string;
  type: string;
}

export const BlogPostHead = ({
  author,
  title,
  postedDate,
  type,
}: BlogPostHeadProps) => (
  <section className={`${styles.section} topSection container`}>
    <div className={styles.author}>
      <Image
        className={styles.authorImg}
        src={author.imageURL || Author}
        alt='author'
      />
      <div>
        <span className={`${styles.authorName} heading3`}>{author.name}</span>
        <span className={`${styles.postedDate} body1`}>{postedDate}</span>
      </div>
    </div>
    <h1 className='heading1'>{title}</h1>
    <div className={styles.type}>
      <Image src={Shuttle} alt='shuttle' />
      <span className='heading4'>{type}</span>
    </div>
  </section>
);
