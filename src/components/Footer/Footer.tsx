'use client';

import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { EmailInput } from '@/components/Footer/EmailInput/EmailInput';
import { FOOTER_LINKS, FOOTER_SOCIAL } from '@/constants/footer';
import { Link } from '@/navigation';
import { isActiveLink } from '@/utils/isActiveLink';

import styles from './Footer.module.scss';

export interface FooterProps {
  messages: {
    links: string[];
    text: string;
    button: string;
  };
}

export const Footer = ({ messages }: FooterProps) => {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.head}>
          <h2>Modsen Client Blog</h2>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {FOOTER_LINKS.map((link, index) => (
                <li
                  key={link}
                  className={classNames(styles.link, {
                    [styles.active]: isActiveLink(pathname, link),
                  })}
                >
                  <Link href={link}>{messages.links[index]}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.content}>
          <p className={`${styles.text} heading2`}>{messages.text}</p>
          <EmailInput
            messages={{
              button: messages.button,
            }}
          />
        </div>
        <div className={styles.social}>
          <div>
            <div>Finstreet 118 2561 Fintown</div>
            <div>Hello@finsweet.com 020 7993 2905</div>
          </div>
          <ul className={styles.socialLinks}>
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
    </footer>
  );
};
