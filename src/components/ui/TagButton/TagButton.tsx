import React from 'react';
import styles from './TagButton.module.scss';

interface TagButtonProps {
  name: string;
  onChange: () => void;
}

export const TagButton = ({ name, onChange }: TagButtonProps) => (
    <label htmlFor={name} className={styles.label}>
      <input
        id={name}
        className={styles.input}
        onChange={onChange}
        type='checkbox'
      />
      <span className={styles.text}>{name}</span>
    </label>
  );
