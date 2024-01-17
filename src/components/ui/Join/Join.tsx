import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import styles from './Join.module.scss';

export const Join = () => (
  <section className="section container">
    <div className={styles.wrapper}>
      <h3 className="heading2">Join our team to be a part of our story</h3>
      <p className="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Button>Join Now</Button>
    </div>
  </section>
);
