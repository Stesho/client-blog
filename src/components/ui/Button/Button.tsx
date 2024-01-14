import React, { ReactNode } from 'react';
import { ButtonTypes } from '@/types/buttons';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  styleType?: ButtonTypes;
}

export const Button = ({
  children,
  styleType = ButtonTypes.Primary,
}: ButtonProps) => (
    <button
      type='button'
      className={classNames(styles.button, styles[styleType])}
    >
      {children}
    </button>
  );
