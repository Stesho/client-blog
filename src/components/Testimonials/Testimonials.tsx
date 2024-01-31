'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { REVIEWS } from '@/constants/reviews';

import styles from './Testimonials.module.scss';

interface TestimonialsProps {
  messages: {
    title: string;
    caption: string;
    text: string;
  };
}

export const Testimonials = ({ messages }: TestimonialsProps) => {
  const [step, setStep] = useState(0);

  const prevSlide = () => setStep((prev) => prev - 1);
  const nextSlide = () => setStep((prev) => prev + 1);

  return (
    <section
      className={`${styles.section} section container`}
      data-cy='testimonials'
    >
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <span className='cap'>{messages.caption}</span>
          <h3 className='heading3'>{messages.title}</h3>
          <p className='body1'>{messages.text}</p>
        </div>
        <div className={styles.carousel}>
          <div className={styles.line}>
            {REVIEWS.map((review) => (
              <div
                key={review.id}
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
              className={styles.controller}
              onClick={prevSlide}
              disabled={step === 0}
              data-testid='testimonialsPrevButton'
              data-cy='testimonialsPrevButton'
            >
              <span>←</span>
            </button>
            <button
              type='button'
              className={styles.controller}
              onClick={nextSlide}
              disabled={step === REVIEWS.length - 1}
              data-testid='testimonialsNextButton'
              data-cy='testimonialsNextButton'
            >
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
