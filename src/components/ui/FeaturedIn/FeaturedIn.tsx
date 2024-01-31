import React from 'react';
import Image from 'next/image';

import Logo1 from '@/assets/img/home/logo1.png';
import Logo2 from '@/assets/img/home/logo2.png';
import Logo3 from '@/assets/img/home/logo3.png';
import Logo4 from '@/assets/img/home/logo4.png';
import Logo5 from '@/assets/img/home/logo5.png';

import styles from './FeaturedIn.module.scss';

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

export const FeaturedIn = () => (
  <section className={`${styles.section} container`}>
    <div>
      <span className={`${styles.caption} body2`}>We are</span>
      <h4 className={`${styles.title} heading4`}>Featured in</h4>
    </div>
    <ul className={styles.list}>
      {logos.map((logoSrc, index) => (
        <li className={styles.logoItem}>
          <Image src={logoSrc} alt={`logo${index}`} />
        </li>
      ))}
    </ul>
  </section>
);
