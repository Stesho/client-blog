import React from 'react';
import Image from 'next/image';
import { AUTHORS } from '@/constants/authors';
import { FOOTER_LINKS } from '@/constants/footer';
import styles from './AuthorProfile.module.scss';

export const AuthorProfile = () => (
    <section className={`${styles.section} section topSection`}>
      <div className={`${styles.wrapper} container`}>
        <Image
          className={`${styles.avatar}`}
          src={AUTHORS[0].imageURL}
          alt={AUTHORS[0].name}
        />
        <div className={styles.authorInfo}>
          <h1 className="heading1">
            Hey there, I’m Andrew Jonhson and welcome to my Blog
          </h1>
          <p className="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
          <ul className={styles.links}>
            {FOOTER_LINKS.map((link) => (
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
