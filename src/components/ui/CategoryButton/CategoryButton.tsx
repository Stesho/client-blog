import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './CategoryButton.module.scss';

interface CategoryButtonProps {
  id: string;
  imageURL: StaticImageData;
  alt: string;
  caption: string;
  isChecked: boolean;
}

export const CategoryButton = ({
  id,
  imageURL,
  alt,
  caption,
  isChecked,
}: CategoryButtonProps) => (
  <div>
    <input
      id={`${id}category`}
      name='category'
      className={styles.input}
      type='radio'
      checked={isChecked}
    />
    <label htmlFor={`${id}category`} className={styles.button}>
      <Image className={styles.image} src={imageURL} alt={alt} />
      <span className={styles.caption}>{caption}</span>
    </label>
  </div>
);
