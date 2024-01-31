import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { ButtonTypes } from '@/types/buttons';

import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  styleType?: ButtonTypes;
  className?: string;
  onClick?: () => void;
  dataTestid?: string;
}

export const Button = ({
  children,
  className,
  onClick,
  dataTestid,
  type = 'button',
  styleType = ButtonTypes.Primary,
}: ButtonProps) => (
  <button
    data-testid={dataTestid}
    onClick={onClick}
    type={type || 'button'}
    className={classNames(styles.button, className, styles[styleType])}
  >
    {children}
  </button>
);
