import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { FOOTER_LINKS } from '@/constants/footer';
import styles from './AuthorCard.module.scss';

interface AuthorCardProps {
  imageURL: StaticImageData;
  alt: string;
  name: string;
  activity: string;
}

export const AuthorCard = ({
  imageURL,
  alt,
  name,
  activity,
}: AuthorCardProps) => (
  <div className={styles.card}>
    <Image className={styles.image} src={imageURL} alt={alt} />
    <span className='heading3'>{name}</span>
    <span className={`${styles.activity} body2`}>{activity}</span>
    <ul className={styles.social}>
      {FOOTER_LINKS.map((link) => (
        <li>
          <a href={link.link}>
            <Image src={link.iconURL} alt={link.alt} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);
