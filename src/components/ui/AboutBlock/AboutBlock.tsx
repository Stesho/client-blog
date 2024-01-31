import React from 'react';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';

import styles from './AboutBlock.module.scss';

interface AboutBlockProps {
  title: string;
  subtitle: string;
  text: string;
  image: StaticImageData;
  isReversed?: boolean;
}

export const AboutBlock = ({
  title,
  text,
  subtitle,
  image,
  isReversed = false,
}: AboutBlockProps) => (
  <section
    className={classNames(styles.section, 'section', 'container', {
      [styles.reversed]: isReversed,
    })}
  >
    <div className={styles.content}>
      <h2 className='heading2'>{title}</h2>
      <h4 className={`${styles.subtitle} heading4`}>{subtitle}</h4>
      <p className='body1'>{text}</p>
    </div>
    <Image className={styles.image} src={image} alt='ground group growth' />
  </section>
);
