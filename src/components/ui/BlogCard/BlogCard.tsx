import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './BlogCard.module.scss';

export interface BlogCardProps {
  imageURL: StaticImageData;
  alt: string;
  author: string;
  date: string;
  title: string;
  text: string;
}

export const BlogCard = ({
  imageURL,
  alt,
  author,
  date,
  title,
  text,
}: BlogCardProps) => (
  <div className={styles.card}>
    <Image className={styles.image} src={imageURL} alt={alt} />
    <div className={`${styles.caption} label`}>
      By <span className={styles.author}>{author}</span> | <span>{date}</span>
    </div>
    <h3 className={`${styles.title} heading3`}>{title}</h3>
    <p className={`${styles.text} body1`}>{text}</p>
  </div>
);
