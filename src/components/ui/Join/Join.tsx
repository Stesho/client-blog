import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import { useTranslations } from 'next-intl';
import styles from './Join.module.scss';

export const Join = () => {
  const t = useTranslations('home.join');

  return (
    <section className='section container'>
      <div className={styles.wrapper}>
        <h3 className='heading2'>{t('title')}</h3>
        <p className='body1'>{t('text')}</p>
        <Button>{t('button')}</Button>
      </div>
    </section>
  );
};
