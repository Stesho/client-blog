'use client';

import React, {
  ChangeEvent,
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
} from 'react';
import classNames from 'classnames';
import { InputTypes } from '@/types/inputs';
import styles from './Input.module.scss';

interface InputProps {
  type?: HTMLInputTypeAttribute;
  styleType?: InputTypes;
  placeholder?: string;
  className?: string;
  name?: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const Input = ({
  value,
  onChange,
  placeholder,
  className,
  name,
  type = 'text',
  styleType = InputTypes.Primary,
}: InputProps) => {
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={onChangeValue}
      placeholder={placeholder}
      className={classNames(styles.input, className, styles[styleType])}
      name={name}
    />
  );
};
