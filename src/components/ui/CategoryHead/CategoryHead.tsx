import React from 'react';

import styles from './CategoryHead.module.scss';

interface CategoryHeadProps {
  category: string;
}

export const CategoryHead = ({ category }: CategoryHeadProps) => (
  <section className={`${styles.section} section topSection`}>
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} display`}>{category}</h1>
      <p className={`${styles.text} body1`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <span className='cap'>
        Blog {'>'} {category}
      </span>
    </div>
  </section>
);
