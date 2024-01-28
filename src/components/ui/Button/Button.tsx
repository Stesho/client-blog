import React, { ReactNode } from 'react';
import { ButtonTypes } from '@/types/buttons';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  styleType?: ButtonTypes;
  className?: string;
}

export const Button = ({
  children,
  className,
  type = 'button',
  styleType = ButtonTypes.Primary,
}: ButtonProps) => (
  <button
    type={type || 'button'}
    className={classNames(styles.button, className, styles[styleType])}
  >
    {children}
  </button>
);
