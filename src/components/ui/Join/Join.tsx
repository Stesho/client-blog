import React from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/Button/Button';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/navigation';

import styles from './Join.module.scss';

export const Join = () => {
  const t = useTranslations('home.join');

  return (
    <section className='section container'>
      <div className={styles.wrapper}>
        <h3 className='heading2'>{t('title')}</h3>
        <p className='body1'>{t('text')}</p>
        <Link href={`${ROUTES.contacts}`}>
          <Button>{t('button')}</Button>
        </Link>
      </div>
    </section>
  );
};
