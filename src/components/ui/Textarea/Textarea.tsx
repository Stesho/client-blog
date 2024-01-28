import React from 'react';
import classNames from 'classnames';
import { InputTypes } from '@/types/inputs';
import styles from './Textarea.module.scss';

interface TextareaProps {
  className?: string;
  styleType?: InputTypes;
  placeholder?: string;
}

export const Textarea = ({
  className,
  placeholder,
  styleType = InputTypes.Primary,
}: TextareaProps) => (
    <textarea
      placeholder={placeholder}
      className={classNames(styles.textarea, className, styles[styleType])}
      rows={5}
    />
  );
