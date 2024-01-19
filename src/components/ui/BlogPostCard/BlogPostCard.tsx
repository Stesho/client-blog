import React from 'react';
import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames';
import styles from './BlogPostCard.module.scss';

interface BlogPostCardProps {
  imageURL: StaticImageData;
  alt: string;
  type: string;
  title: string;
  text: string;
  className?: string;
}

export const BlogPostCard = ({
  imageURL,
  alt,
  type,
  title,
  text,
  className,
}: BlogPostCardProps) => (
  <div className={classNames(styles.blogPostCard, className)}>
    <Image className={styles.image} src={imageURL} alt={alt} />
    <div className={styles.content}>
      <span className={styles.type}>{type}</span>
      <h3 className={`${styles.title} heading2`}>{title}</h3>
      <p className={`${styles.text} body1`}>{text}</p>
    </div>
  </div>
);
