'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import styles from './EmailInput.module.scss';

export const EmailInput = () => {
  const [email, setEmail] = useState('');

  return (
    <div className={styles.wrapper}>
      <Input
        value={email}
        onChange={setEmail}
        className={styles.input}
        placeholder='Enter Your Email'
      />
      <Button>Subscribe</Button>
    </div>
  );
};
