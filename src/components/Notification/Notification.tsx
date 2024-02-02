'use client';

import React, { useEffect } from 'react';

import { Portal } from '@/components/ui/Portal/Portal';

import styles from './Notification.module.scss';

interface NotificationProps {
  text: string;
  onClose: () => void;
}

export const Notification = ({ text, onClose }: NotificationProps) => {
  const lifeTime = 2990;

  useEffect(() => {
    const timerId = setTimeout(() => {
      onClose();
    }, lifeTime);

    return () => clearTimeout(timerId);
  }, [onClose]);

  return (
    <Portal id='notification'>
      <div className={styles.notificationWrapper}>
        <div className={styles.text}>
          <span className={styles.title}>Success</span>
          <p className={styles.message}>{text}</p>
        </div>
        <button className={styles.closeBtn} type='button' onClick={onClose}>
          ✖
        </button>
        <div className={styles.border} />
      </div>
    </Portal>
  );
};
