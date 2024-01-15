'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { REVIEWS } from '@/constants/reviews';
import styles from './Testimonials.module.scss';

export const Testimonials = () => {
  const [step, setStep] = useState(0);

  const prevSlide = () => setStep((prev) => prev - 1);
  const nextSlide = () => setStep((prev) => prev + 1);

  return (
    <section className="section container">
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <span className="cap">Testimonials</span>
          <h3 className="heading3">What people say about our blog</h3>
          <p className="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className={styles.carousel}>
          <div className={styles.testimonial}>
            <p className={`${styles.review} heading4`}>{REVIEWS[step].text}</p>
            <div className={styles.author}>
              <Image src={REVIEWS[step].author.profileURL} alt='author' />
              <div className={styles.info}>
                <span>{REVIEWS[step].author.name}</span>
                <span>{REVIEWS[step].author.place}</span>
              </div>
            </div>
          </div>
          <div className={styles.controllers}>
            <button
              type='button'
              className={styles.prev}
              onClick={prevSlide}
              disabled={step === 0}
            >
              ←
            </button>
            <button
              type='button'
              className={styles.next}
              onClick={nextSlide}
              disabled={step === REVIEWS.length - 1}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
