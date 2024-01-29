'use client';

import React, { HTMLInputTypeAttribute } from 'react';
import classNames from 'classnames';
import { InputTypes } from '@/types/inputs';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import styles from './Input.module.scss';

interface InputProps<T extends FieldValues> {
  type?: HTMLInputTypeAttribute;
  styleType?: InputTypes;
  placeholder?: string;
  className?: string;
  label: Path<T>;
  register: UseFormRegister<T>;
  errorMessage?: string;
}

export const Input = <T extends FieldValues>({
  register,
  label,
  errorMessage,
  placeholder,
  className,
  type = 'text',
  styleType = InputTypes.Primary,
}: InputProps<T>) => (
    <div className={classNames(styles.wrapper, className)}>
      <input
        {...register(label)}
        type={type}
        placeholder={placeholder}
        className={classNames(styles.input, styles[styleType], {
          [styles.error]: !!errorMessage,
        })}
      />
      {!!errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
