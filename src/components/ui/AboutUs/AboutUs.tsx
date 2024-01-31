import React from 'react';
import { useTranslations } from 'next-intl';

import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  const t = useTranslations('about.head');

  return (
    <section className={`${styles.section} topSection container`}>
      <div className={styles.header}>
        <span className={`${styles.caption} cap`}>{t('caption')}</span>
        <h1 className='heading1'>{t('title')}</h1>
      </div>
      <p className='body1'>{t('text')}</p>
    </section>
  );
};
