import React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

import { InputTypes } from '@/types/inputs';

import styles from './Textarea.module.scss';

interface TextareaProps<T extends FieldValues> {
  className?: string;
  styleType?: InputTypes;
  placeholder?: string;
  label: Path<T>;
  register: UseFormRegister<T>;
  errorMessage?: string;
  inputDataTestid?: string;
  inputDataCy?: string;
  errorMessageDataTestid?: string;
  errorMessageDataCy?: string;
}

export const Textarea = <T extends FieldValues>({
  register,
  label,
  className,
  placeholder,
  errorMessage,
  inputDataTestid,
  inputDataCy,
  errorMessageDataTestid,
  errorMessageDataCy,
  styleType = InputTypes.Primary,
}: TextareaProps<T>) => (
  <div className={classNames(styles.wrapper, className)}>
    <textarea
      {...register(label)}
      placeholder={placeholder}
      className={classNames(styles.textarea, styles[styleType], {
        [styles.error]: !!errorMessage,
      })}
      rows={5}
      data-testid={inputDataTestid}
      data-cy={inputDataCy}
    />
    {!!errorMessage && (
      <div
        className={styles.errorMessage}
        data-testid={errorMessageDataTestid}
        data-cy={errorMessageDataCy}
      >
        {errorMessage}
      </div>
    )}
  </div>
);
