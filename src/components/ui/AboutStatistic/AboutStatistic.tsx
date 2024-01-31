import React from 'react';
import { useTranslations } from 'next-intl';

import styles from './AboutStatistic.module.scss';

export const AboutStatistic = () => {
  const t = useTranslations('about.statistic');

  return (
    <section className='container'>
      <div className={styles.wrapper}>
        <div className={styles.statistic}>
          <div className={styles.statisticType}>
            <div className={`${styles.value} display`}>12+</div>
            <div className={`${styles.rate} body1`}>{t('published')}</div>
          </div>
          <div className={styles.statisticType}>
            <div className={`${styles.value} display`}>18К+</div>
            <div className={`${styles.rate} body1`}>{t('views')}</div>
          </div>
          <div className={styles.statisticType}>
            <div className={`${styles.value} display`}>30К+</div>
            <div className={`${styles.rate} body1`}>{t('total')}</div>
          </div>
        </div>
        <div className={styles.decoration}>
          <div />
        </div>
      </div>
    </section>
  );
};
