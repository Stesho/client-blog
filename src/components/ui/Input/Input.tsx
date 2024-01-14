import React, { HTMLInputTypeAttribute } from 'react';
import classNames from 'classnames';
import { InputTypes } from '@/types/inputs';
import styles from './Input.module.scss';

interface InputProps {
  type?: HTMLInputTypeAttribute;
  styleType?: InputTypes;
  placeholder?: string;
  className?: string;
}

export const Input = ({
  placeholder,
  className,
  type = 'text',
  styleType = InputTypes.Primary,
}: InputProps) => (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames(styles.input, className, styles[styleType])}
    />
  );
