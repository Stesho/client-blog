import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { FOOTER_SOCIAL } from '@/constants/footer';
import { Author } from '@/types/author';

import styles from './AuthorProfile.module.scss';

interface AuthorProfileProps {
  author: Author;
}

export const AuthorProfile = ({ author }: AuthorProfileProps) => {
  const t = useTranslations('author');

  return (
    <section className={`${styles.section} section topSection`}>
      <div className={`${styles.wrapper} container`}>
        <Image
          className={`${styles.avatar}`}
          src={author.imageURL}
          alt={author.name}
        />
        <div className={styles.authorInfo}>
          <h1 className='heading1'>{t('title', { name: author.name })}</h1>
          <p className='body1'>{t('text')}</p>
          <ul className={styles.links}>
            {FOOTER_SOCIAL.map((link) => (
              <li>
                <a href={link.link}>
                  <Image src={link.iconURL} alt={link.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
