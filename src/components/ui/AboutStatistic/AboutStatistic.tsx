import React from 'react';
import styles from './AboutStatistic.module.scss';

export const AboutStatistic = () => (
    <section className={`${styles.section} container`}>
      <div className={styles.wrapper}>
        <div className={styles.statistic}>
          <div className={styles.statisticType}>
            <div className={`${styles.value} display`}>12+</div>
            <div className={`${styles.rate} body1`}>Blogs Published</div>
          </div>
          <div className={styles.statisticType}>
            <div className={`${styles.value} display`}>18К+</div>
            <div className={`${styles.rate} body1`}>Views on Finsweet</div>
          </div>
          <div className={styles.statisticType}>
            <div className={`${styles.value} display`}>30К+</div>
            <div className={`${styles.rate} body1`}>Total active Users</div>
          </div>
        </div>
        <div className={styles.decoration}>
          <div />
        </div>
      </div>
    </section>
  );
