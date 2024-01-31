import React from 'react';

import styles from './TagButton.module.scss';

interface TagButtonProps {
  name: string;
  onChange: () => void;
  dataTestid?: string;
  dataCy?: string;
}

export const TagButton = ({
  name,
  onChange,
  dataTestid,
  dataCy,
}: TagButtonProps) => (
  <label
    htmlFor={name}
    className={styles.label}
    data-testid={dataTestid}
    data-cy={dataCy}
  >
    <input
      id={name}
      className={styles.input}
      onChange={onChange}
      type='checkbox'
    />
    <span className={styles.text}>{name}</span>
  </label>
);
