import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import { InputTypes } from '@/types/inputs';
import styles from './Textarea.module.scss';

interface TextareaProps {
  className?: string;
  styleType?: InputTypes;
  placeholder?: string;
  name?: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const Textarea = ({
  value,
  onChange,
  className,
  placeholder,
  name,
  styleType = InputTypes.Primary,
}: TextareaProps) => {
  const onChangeValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      name={name}
      value={value}
      onChange={onChangeValue}
      placeholder={placeholder}
      className={classNames(styles.textarea, className, styles[styleType])}
      rows={5}
    />
  );
};
