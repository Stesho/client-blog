import React from 'react';

import styles from './TagButton.module.scss';

interface TagButtonProps {
  name: string;
  onChange: () => void;
  dataTestid?: string;
}

export const TagButton = ({ name, onChange, dataTestid }: TagButtonProps) => (
  <label htmlFor={name} className={styles.label} data-testid={dataTestid}>
    <input
      id={name}
      className={styles.input}
      onChange={onChange}
      type='checkbox'
    />
    <span className={styles.text}>{name}</span>
  </label>
);
