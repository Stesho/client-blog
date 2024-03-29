'use client';

import React, { useState } from 'react';

import { NavBar } from '@/components/Header/NavBar/NavBar';
import { VideoModal } from '@/components/VideoModal/VideoModal';
import { usePreventScroll } from '@/hooks/usePreventScroll';
import { useWindowSize } from '@/hooks/useWindowSize';

import styles from './Header.module.scss';

export interface HeaderProps {
  messages: {
    links: string[];
    button: string;
  };
}

export const Header = ({ messages }: HeaderProps) => {
  const maxWindowSizePx = 768;
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [windowSize] = useWindowSize();

  usePreventScroll(isBurgerOpened);

  const openModal = () => setIsModalOpened(true);
  const closeModal = () => setIsModalOpened(false);

  const toggleBurger = () => setIsBurgerOpened(!isBurgerOpened);
  const burgerToCrossAnimation = () => (isBurgerOpened ? styles.cross : '');

  return (
    <header className={styles.headerWrapper} data-cy='header'>
      <div className={`${styles.header} container`}>
        <h2 className={styles.title}>Modsen Client Blog</h2>
        <button
          type='button'
          className={`${styles.burgerBtn} ${burgerToCrossAnimation()}`}
          onClick={toggleBurger}
        >
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
        </button>
        {windowSize[0] <= maxWindowSizePx ? (
          isBurgerOpened && (
            <div className={styles.overlay}>
              <NavBar messages={messages} openModal={openModal} />
            </div>
          )
        ) : (
          <NavBar messages={messages} openModal={openModal} />
        )}
      </div>
      {isModalOpened && <VideoModal onClose={closeModal} />}
    </header>
  );
};
