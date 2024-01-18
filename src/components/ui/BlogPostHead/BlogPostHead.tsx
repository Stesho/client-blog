import React from 'react';
import Image from 'next/image';
import Author from '@/assets/img/home/review-author-1.jpg';
import Shuttle from '@/assets/img/category/shuttle.png';
import styles from './BlogPostHead.module.scss';

export const BlogPostHead = () => (
  <section className={`${styles.section} topSection`}>
    <div className={styles.author}>
      <Image className={styles.authorImg} src={Author} alt='author' />
      <div>
        <span className={`${styles.authorName} heading3`}>Andrew Jonson</span>
        <span className={`${styles.postedDate} body1`}>
          Posted on 27th January 2022
        </span>
      </div>
    </div>
    <h1 className='heading1'>
      Step-by-step guide to choosing great font pairs
    </h1>
    <div className={styles.type}>
      <Image src={Shuttle} alt='shuttle' />
      <span className='heading4'>Startup</span>
    </div>
  </section>
);
