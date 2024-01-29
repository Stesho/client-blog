import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { Post } from '@/types/post';
import styles from './BlogPostCard.module.scss';

interface BlogPostCardProps {
  post: Post;
  className?: string;
  asLink?: boolean;
}

export const BlogPostCard = ({
  post: { id, image, type, title, text },
  className,
  asLink = true,
}: BlogPostCardProps) => {
  const Content = (
    <div className={classNames(styles.blogPostCard, className)}>
      <Image className={styles.image} src={image} alt={title} />
      <div className={styles.content}>
        <span className={styles.type}>{type}</span>
        <h3 className={`${styles.title} heading2`}>{title}</h3>
        <p className={`${styles.text} body1`}>{text}</p>
      </div>
    </div>
  );

  return asLink ? (
    <Link href={`${ROUTES.blog}/${id}`}>{Content}</Link>
  ) : (
    Content
  );
};
