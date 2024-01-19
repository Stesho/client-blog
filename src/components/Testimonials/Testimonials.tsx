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
    <section className={`${styles.section} section container`}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <span className='cap'>Testimonials</span>
          <h3 className='heading3'>What people say about our blog</h3>
          <p className='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className={styles.carousel}>
          <div className={styles.line}>
            {REVIEWS.map((review) => (
              <div
                className={styles.testimonial}
                style={{ transform: `translateX(-${step * 100}%)` }}
              >
                <p className={`${styles.review} heading4`}>{review.text}</p>
                <div className={styles.author}>
                  <Image src={review.author.profileURL} alt='author' />
                  <div className={styles.info}>
                    <span className={`${styles.authorName} heading4`}>
                      {review.author.name}
                    </span>
                    <span className={`${styles.place} body1`}>
                      {review.author.place}
                    </span>
                  </div>
                </div>
              </div>
            ))}
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
