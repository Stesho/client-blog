import React from 'react';
import { useTranslations } from 'next-intl';

import styles from '@/components/ui/OurMission/OurMission.module.scss';

export const OurVision = () => {
  const t = useTranslations();

  return (
    <section className={`${styles.section} section container`}>
      <div className={styles.wrapper}>
        <article className={`${styles.article} ${styles.aboutUs}`}>
          <span className='cap'>{t('home.about.caption')}</span>
          <h3 className={`${styles.header} heading3`}>
            {t('home.about.title')}
          </h3>
          <p className='body1'>{t('home.about.text')}</p>
        </article>
        <article className={`${styles.article} ${styles.ourMission}`}>
          <span className='cap'>{t('about.vision.caption')}</span>
          <h3 className={`${styles.header} heading3`}>
            {t('about.vision.title')}
          </h3>
          <p className='body1'>{t('about.vision.text')}</p>
        </article>
      </div>
    </section>
  );
};
