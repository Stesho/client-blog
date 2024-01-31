import React from 'react';

import styles from './ContactsInfo.module.scss';

export const ContactsInfo = () => (
  <section className='topSection'>
    <div className={`${styles.wrapper} container`}>
      <div className={styles.head}>
        <span className={`${styles.subtitle} cap`}>Contact us</span>
        <h1 className={`${styles.title} heading1`}>
          Let’s Start a Conversation
        </h1>
        <p className='body1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>
      <div className={`${styles.info}`}>
        <div className={styles.infoBlock}>
          <span className={`${styles.infoTopCaption} body2`}>
            Working hours
          </span>
          <h3 className='heading5'>Monday To Friday</h3>
          <h3 className='heading5'>9:00 AM to 8:00 PM</h3>
          <span className={`${styles.infoBottomCaption} body1`}>
            Our Support Team is available 24/7
          </span>
        </div>
        <div className={styles.infoBlock}>
          <span className={`${styles.infoTopCaption} body2`}>Contact Us</span>
          <h3 className='heading5'>020 7993 2905</h3>
          <span className={`${styles.infoBottomCaption} body1`}>
            hello@finsweet.com
          </span>
        </div>
      </div>
    </div>
  </section>
);
