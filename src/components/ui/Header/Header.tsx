'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { ButtonTypes } from '@/types/buttons';
import { LangSelect } from '@/components/ui/LangSelect/LangSelect';
import { VideoModal } from '@/components/VideoModal/VideoModal';
import { HEADER_LINKS } from '@/constants/headerLinks';
import styles from './Header.module.scss';

interface HeaderProps {
  messages: {
    links: string[];
    button: string;
  };
}

export const Header = ({ messages }: HeaderProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => setIsModalOpened(true);
  const closeModal = () => setIsModalOpened(false);

  return (
    <header className={styles.headerWrapper}>
      <div className={`${styles.header} container`}>
        <h2>Modsen Client Blog</h2>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {HEADER_LINKS.map((link, index) => (
              <li key={link} className={styles.link}>
                <Link href={link}>{messages.links[index]}</Link>
              </li>
            ))}
          </ul>
          <LangSelect />
          <Button onClick={openModal} styleType={ButtonTypes.Secondary}>
            {messages.button}
          </Button>
        </nav>
      </div>
      {isModalOpened && <VideoModal onClose={closeModal} />}
    </header>
  );
};
