import React from 'react';
import styles from './HomePost.module.scss';

interface HomePostProps {
  author: string;
  date: string;
  title: string;
}

export const HomePost = ({ author, date, title }: HomePostProps) => (
    <div className={styles.homePost}>
      <span className={`${styles.author} label`}>
        By <span>{author}</span> | {date}
      </span>
      <h4 className={`${styles.title} heading4`}>{title}</h4>
    </div>
  );
