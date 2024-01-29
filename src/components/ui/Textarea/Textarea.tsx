import React from 'react';
import classNames from 'classnames';
import { InputTypes } from '@/types/inputs';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import styles from './Textarea.module.scss';

interface TextareaProps<T extends FieldValues> {
  className?: string;
  styleType?: InputTypes;
  placeholder?: string;
  label: Path<T>;
  register: UseFormRegister<T>;
  errorMessage?: string;
}

export const Textarea = <T extends FieldValues>({
  register,
  label,
  className,
  placeholder,
  errorMessage,
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
      />
      {!!errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
