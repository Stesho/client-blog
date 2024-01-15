import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import styles from './HomeInfo.module.scss';

export const HomeInfo = () => (
    <section className={styles.section}>
      <div className='container'>
        <span className={styles.postedOn}>
          Posted on <span>startup</span>
        </span>
        <h1 className={`${styles.header} display`}>
          Step-by-step guide to choosing great font pairs
        </h1>
        <span className='body1'>
          By <span className={styles.author}>James West</span> | May 23, 2022{' '}
        </span>
        <p className={`${styles.text} body1`}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <Button>Read More {'>'}</Button>
      </div>
    </section>
  );
