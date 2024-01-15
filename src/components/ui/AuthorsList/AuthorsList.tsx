import React from 'react';
import { AuthorCard } from '@/components/ui/AuthorCard/AuthorCard';
import { AUTHORS } from '@/constants/authors';
import styles from './AuthorsList.module.scss';

export const AuthorsList = () => (
    <section className="section container">
      <h3 className={`${styles.title} heading2`}>List of Authors</h3>
      <ul className={styles.list}>
        {AUTHORS.map((author) => (
          <li className={styles.listItem}>
            <AuthorCard
              imageURL={author.imageURL}
              alt={author.alt}
              name={author.name}
              activity={author.activity}
            />
          </li>
        ))}
      </ul>
    </section>
  );
