import React from 'react';
import { HEADER_LINKS } from '@/constants/headerLinks';
import Link from 'next/link';
import { LangSelect } from '@/components/ui/LangSelect/LangSelect';
import { Button } from '@/components/ui/Button/Button';
import { ButtonTypes } from '@/types/buttons';
import styles from './NavBar.module.scss';

interface NavBarProps {
  messages: {
    links: string[];
    button: string;
  };
  openModal: () => void;
}

export const NavBar = ({ messages, openModal }: NavBarProps) => (
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
);
