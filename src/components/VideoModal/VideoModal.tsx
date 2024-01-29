import React from 'react';
import { Modal } from '@/components/ui/Modal/Modal';
import styles from './VideoModal.module.scss';

interface VideoModalProps {
  onClose: () => void;
}

export const VideoModal = ({ onClose }: VideoModalProps) => (
    <Modal id='about-us-modal' onClose={onClose}>
      <div className={styles.videoResponsive}>
        <iframe
          src="https://www.youtube.com/embed/zRp4NS_eeGc"
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      </div>
    </Modal>
  );
