import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import BgImage from '@/assets/img/home/close-up-photography.jpg';
import { useTranslations } from 'next-intl';
import styles from './WhyWeStarted.module.scss';

export const WhyWeStarted = () => {
  const t = useTranslations('home.whyWeStarted');

  return (
    <section className={`${styles.section} section container`}>
      <Image
        className={styles.image}
        src={BgImage}
        alt='close up photography'
      />
      <div className={styles.content}>
        <span className='cap'>{t('caption')}</span>
        <h2 className={`${styles.header} heading1`}>{t('title')}</h2>
        <p className='body1'>{t('text')}</p>
        <Button className={styles.button}>{t('button')}</Button>
      </div>
    </section>
  );
};
