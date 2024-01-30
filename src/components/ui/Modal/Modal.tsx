'use client';

import React, { ReactNode, useEffect } from 'react';

import { Portal } from '@/components/ui/Portal/Portal';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import styles from './Modal.module.scss';

interface ModalProps {
  id: string;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ id, onClose, children }: ModalProps) => {
  const modalRef = useOutsideClick(onClose);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Portal id={id}>
      <div className={styles.overlay}>
        <div className={styles.content} ref={modalRef}>
          <button
            className={styles.closeButton}
            onClick={onClose}
            type='button'
            data-testid='modalCloseButton'
          >
            ✖
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
