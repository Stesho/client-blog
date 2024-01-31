import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FOOTER_LINKS, FOOTER_SOCIAL } from '@/constants/footer';
import { EmailInput } from '@/components/Footer/EmailInput/EmailInput';
import { Link } from '@/navigation';
import styles from './Footer.module.scss';

export const Footer = () => {
  const t = useTranslations('footer');
  const messages = ['home', 'blog', 'about', 'contacts', 'privacyPolicy'].map(
    (message) => t(`nav.${message}`),
  );

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.head}>
          <h2>Modsen Client Blog</h2>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {FOOTER_LINKS.map((link, index) => (
                <li className={styles.link}>
                  <Link href={link}>{messages[index]}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.content}>
          <p className={`${styles.text} heading2`}>{t('text')}</p>
          <EmailInput />
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
