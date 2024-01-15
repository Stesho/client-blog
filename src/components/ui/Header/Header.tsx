import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import { ButtonTypes } from '@/types/buttons';
import { LangSelect } from '@/components/ui/LangSelect/LangSelect';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <h2>Modsen Client Blog</h2>
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.link}>Home</li>
        <li className={styles.link}>Blog</li>
        <li className={styles.link}>About Us</li>
        <li className={styles.link}>Contact Us</li>
      </ul>
      <LangSelect />
      <Button styleType={ButtonTypes.Secondary}>Video about us</Button>
    </nav>
  </header>
);
