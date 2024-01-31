import React from 'react';
import { useTranslations } from 'next-intl';

import styles from './ContactsInfo.module.scss';

export const ContactsInfo = () => {
  const t = useTranslations('contacts');

  return (
    <section className='topSection'>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.head}>
          <span className={`${styles.subtitle} cap`}>{t('head.caption')}</span>
          <h1 className={`${styles.title} heading1`}>{t('head.title')}</h1>
          <p className='body1'>{t('head.text')}</p>
        </div>
        <div className={`${styles.info}`}>
          <div className={styles.infoBlock}>
            <span className={`${styles.infoTopCaption} body2`}>
              Working hours
            </span>
            <h3 className='heading5'>{t('workingHours.days')}</h3>
            <h3 className='heading5'>{t('workingHours.hours')}</h3>
            <span className={`${styles.infoBottomCaption} body1`}>
              {t('workingHours.caption')}
            </span>
          </div>
          <div className={styles.infoBlock}>
            <span className={`${styles.infoTopCaption} body2`}>
              {t('contacts.title')}
            </span>
            <h3 className='heading5'>{t('contacts.phoneNumber')}</h3>
            <span className={`${styles.infoBottomCaption} body1`}>
              {t('contacts.email')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
