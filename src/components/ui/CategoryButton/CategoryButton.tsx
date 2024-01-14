import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './CategoryButton.module.scss';

interface CategoryButtonProps {
  imageURL: StaticImageData;
  alt: string;
  caption: string;
}

export const CategoryButton = ({
  imageURL,
  alt,
  caption,
}: CategoryButtonProps) => (
    <div>
      <input id='category' className={styles.input} type='checkbox' />
      <label htmlFor='category' className={styles.button}>
        <Image className={styles.image} src={imageURL} alt={alt} />
        <span className={styles.caption}>{caption}</span>
      </label>
    </div>
  );
