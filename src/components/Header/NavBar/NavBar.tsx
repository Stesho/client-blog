import React from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/Button/Button';
import { LangSelect } from '@/components/ui/LangSelect/LangSelect';
import { HEADER_LINKS } from '@/constants/headerLinks';
import { Link } from '@/navigation';
import { ButtonTypes } from '@/types/buttons';
import { isActiveLink } from '@/utils/isActiveLink';

import styles from './NavBar.module.scss';

interface NavBarProps {
  messages: {
    links: string[];
    button: string;
  };
  openModal: () => void;
}

export const NavBar = ({ messages, openModal }: NavBarProps) => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {HEADER_LINKS.map((link, index) => (
          <li
            key={link}
            className={classNames(styles.link, {
              [styles.active]: isActiveLink(pathname, link),
            })}
          >
            <Link href={link}>{messages.links[index]}</Link>
          </li>
        ))}
      </ul>
      <LangSelect />
      <Button
        dataCy='navBarButton'
        onClick={openModal}
        styleType={ButtonTypes.Secondary}
      >
        {messages.button}
      </Button>
    </nav>
  );
};
