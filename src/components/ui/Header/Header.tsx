import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import { ButtonTypes } from '@/types/buttons';
import { LangSelect } from '@/components/ui/LangSelect/LangSelect';
import { useTranslations } from 'next-intl';
import styles from './Header.module.scss';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header className={styles.header}>
      <h2>Modsen Client Blog</h2>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.link}>{t('nav.home')}</li>
          <li className={styles.link}>{t('nav.blog')}</li>
          <li className={styles.link}>{t('nav.about')}</li>
          <li className={styles.link}>{t('nav.contacts')}</li>
        </ul>
        <LangSelect />
        <Button styleType={ButtonTypes.Secondary}>{t('button')}</Button>
      </nav>
    </header>
  );
};
