import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './CategoryCard.module.scss';

interface CategoryCardProps {
  iconURL: StaticImageData;
  alt: string;
  title: string;
  text: string;
}

export const CategoryCard = ({
  iconURL,
  alt,
  title,
  text,
}: CategoryCardProps) => (
  <div className={styles.card}>
    <Image className={styles.image} src={iconURL} alt={alt} />
    <h4 className={styles.title}>{title}</h4>
    <p className={styles.text}>{text}</p>
  </div>
);
