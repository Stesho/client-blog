import React from 'react';
import { useTranslations } from 'next-intl';

import { ROUTES } from '@/constants/routes';
import { Link } from '@/navigation';

import styles from './OurMission.module.scss';

export const OurMission = () => {
  const t = useTranslations('home');

  return (
    <section
      className={`${styles.section} section container`}
      data-cy='ourMission'
    >
      <div className={styles.decorations}>
        <div />
        <div />
      </div>
      <div className={styles.wrapper}>
        <article className={`${styles.article} ${styles.aboutUs}`}>
          <span className='cap'>{t('about.caption')}</span>
          <h2 className={`${styles.header} heading2`}>{t('about.title')}</h2>
          <p className='body1'>{t('about.text')}</p>
          <Link href={ROUTES.about}>
            <button type='button' className={styles.readMore}>
              {t('about.button')}
            </button>
          </Link>
        </article>
        <article className={`${styles.article} ${styles.ourMission}`}>
          <span className='cap'>{t('mission.caption')}</span>
          <h3 className={`${styles.header} heading3`}>{t('mission.title')}</h3>
          <p className='body1'>{t('mission.text')}</p>
        </article>
      </div>
    </section>
  );
};
