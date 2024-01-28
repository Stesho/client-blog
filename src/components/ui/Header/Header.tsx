import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import { ButtonTypes } from '@/types/buttons';
import { LangSelect } from '@/components/ui/LangSelect/LangSelect';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import styles from './Header.module.scss';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header className={styles.headerWrapper}>
      <div className={`${styles.header} container`}>
        <h2>Modsen Client Blog</h2>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.link}>
              <Link href={ROUTES.home}>{t('nav.home')}</Link>
            </li>
            <li className={styles.link}>
              <Link href={ROUTES.blog}>{t('nav.blog')}</Link>
            </li>
            <li className={styles.link}>
              <Link href={ROUTES.about}>{t('nav.about')}</Link>
            </li>
            <li className={styles.link}>
              <Link href={ROUTES.contacts}>{t('nav.contacts')}</Link>
            </li>
          </ul>
          <LangSelect />
          <Button styleType={ButtonTypes.Secondary}>{t('button')}</Button>
        </nav>
      </div>
    </header>
  );
};
