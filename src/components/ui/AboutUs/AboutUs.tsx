import React from 'react';
import styles from './AboutUs.module.scss';

export const AboutUs = () => (
    <section className={`${styles.section} topSection container`}>
      <div className={styles.header}>
        <span className="cap">About us</span>
        <h1 className="heading1">
          We are a team of content writers who share their learnings
        </h1>
      </div>
      <p className="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
  );
