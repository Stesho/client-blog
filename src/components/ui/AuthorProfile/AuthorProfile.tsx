import React from 'react';
import Image from 'next/image';

import { FOOTER_SOCIAL } from '@/constants/footer';
import { Author } from '@/types/author';

import styles from './AuthorProfile.module.scss';

interface AuthorProfileProps {
  author: Author;
}

export const AuthorProfile = ({ author }: AuthorProfileProps) => (
  <section className={`${styles.section} section topSection`}>
    <div className={`${styles.wrapper} container`}>
      <Image
        className={`${styles.avatar}`}
        src={author.imageURL}
        alt={author.name}
      />
      <div className={styles.authorInfo}>
        <h1 className='heading1'>
          Hey there, I’m {author.name} and welcome to my Blog
        </h1>
        <p className='body1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </p>
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
