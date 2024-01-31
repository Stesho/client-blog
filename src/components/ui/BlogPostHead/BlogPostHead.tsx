import React from 'react';
import Image from 'next/image';

import Shuttle from '@/assets/img/category/shuttle.png';
import Author from '@/assets/img/home/review-author-1.jpg';

import styles from './BlogPostHead.module.scss';

interface BlogPostHeadProps {
  authorName: string;
  postedDate: string;
  title: string;
  type: string;
}

export const BlogPostHead = ({
  authorName,
  title,
  postedDate,
  type,
}: BlogPostHeadProps) => (
  <section className={`${styles.section} topSection container`}>
    <div className={styles.author}>
      <Image className={styles.authorImg} src={Author} alt='author' />
      <div>
        <span className={`${styles.authorName} heading3`}>{authorName}</span>
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
