import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './BlogPostCard.module.scss';

interface BlogPostCardProps {
  imageURL: StaticImageData;
  alt: string;
  type: string;
  title: string;
  text: string;
}

export const BlogPostCard = ({
  imageURL,
  alt,
  type,
  title,
  text,
}: BlogPostCardProps) => (
    <div className={styles.blogPostCard}>
      <Image className={styles.image} src={imageURL} alt={alt} />
      <div className={styles.content}>
        <span className={styles.type}>{type}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
