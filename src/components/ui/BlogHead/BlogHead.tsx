import React from 'react';
import Image from 'next/image';

import BlogImg from '@/assets/img/blog/man-in-white-dress.jpg';
import { Button } from '@/components/ui/Button/Button';

import styles from './BlogHead.module.scss';

export const BlogHead = () => (
  <section className={`${styles.section} topSection section`}>
    <div className={`${styles.wrapper} container`}>
      <div className={`${styles.content}`}>
        <span className='cap'>Featured Post</span>
        <h2 className={`${styles.header} heading2`}>
          Step-by-step guide to choosing great font pairs
        </h2>
        <span className={`${styles.author} label`}>
          By <span>John Doe</span> l May 23, 2022{' '}
        </span>
        <p className={`${styles.text} text`}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <Button>Read More {'>'}</Button>
      </div>
      <Image className={styles.image} src={BlogImg} alt='man in white dress' />
    </div>
  </section>
);
