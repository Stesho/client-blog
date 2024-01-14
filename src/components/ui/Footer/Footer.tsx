import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { FOOTER_LINKS } from '@/constants/footer';
import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.head}>
      <h2>Modsen Client Blog</h2>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.link}>Home</li>
          <li className={styles.link}>Blog</li>
          <li className={styles.link}>About Us</li>
          <li className={styles.link}>Contact Us</li>
          <li className={styles.link}>Privacy Policy</li>
        </ul>
      </nav>
    </div>
    <div className={styles.content}>
      <p className={`${styles.text} heading2`}>
        Subscribe to our news letter to get latest updates and news
      </p>
      <div>
        <Input className={styles.input} placeholder='Enter Your Email' />
        <Button>Subscribe</Button>
      </div>
    </div>
    <div className={styles.social}>
      <div>
        <div>Finstreet 118 2561 Fintown</div>
        <div>Hello@finsweet.com 020 7993 2905</div>
      </div>
      <ul className={styles.socialLinks}>
        {FOOTER_LINKS.map((link) => (
          <li>
            <a href={link.link}>
              <Image src={link.iconURL} alt={link.alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
