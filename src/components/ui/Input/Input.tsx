'use client';

import React, { HTMLInputTypeAttribute } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

import { InputTypes } from '@/types/inputs';

import styles from './Input.module.scss';

interface InputProps<T extends FieldValues> {
  type?: HTMLInputTypeAttribute;
  styleType?: InputTypes;
  placeholder?: string;
  className?: string;
  label: Path<T>;
  register: UseFormRegister<T>;
  errorMessage?: string;
  inputDataTestid?: string;
  errorMessageDataTestid?: string;
}

export const Input = <T extends FieldValues>({
  register,
  label,
  errorMessage,
  placeholder,
  className,
  inputDataTestid,
  errorMessageDataTestid,
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
      data-testid={inputDataTestid}
    />
    {!!errorMessage && (
      <div className={styles.errorMessage} data-testid={errorMessageDataTestid}>
        {errorMessage}
      </div>
    )}
  </div>
);
