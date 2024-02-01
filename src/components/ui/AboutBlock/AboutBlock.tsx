import React from 'react';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';

import styles from './AboutBlock.module.scss';

interface AboutBlockProps {
  image: StaticImageData;
  isReversed?: boolean;
  messages: {
    title: string;
    subtitle: string;
    text: string;
  };
}

export const AboutBlock = ({
  image,
  messages,
  isReversed = false,
}: AboutBlockProps) => (
  <section
    className={classNames(styles.section, 'section', 'container', {
      [styles.reversed]: isReversed,
    })}
  >
    <div className={styles.content}>
      <h2 className='heading2'>{messages.title}</h2>
      <h4 className={`${styles.subtitle} heading4`}>{messages.subtitle}</h4>
      <p className='body1'>{messages.text}</p>
    </div>
    <div
      className={
        isReversed ? styles.circleDecoration : styles.rectangleDecoration
      }
    >
      <Image className={styles.image} src={image} alt='ground group growth' />
    </div>
  </section>
);
