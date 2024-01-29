import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import classNames from 'classnames';
import { AuthorCard } from '@/components/ui/AuthorCard/AuthorCard';
import { Author } from '@/types/author';
import { ROUTES } from '@/constants/routes';
import styles from './AuthorsList.module.scss';

interface AuthorsListProps {
  authors: Author[];
  className?: string;
}

export const AuthorsList = ({ authors, className }: AuthorsListProps) => {
  const t = useTranslations('home.authors');

  return (
    <section className={classNames('container', className)}>
      <h3 className={`${styles.title} heading2`}>{t('title')}</h3>
      <ul className={styles.list}>
        {authors.map((author) => (
          <li key={author.id} className={styles.listItem}>
            <Link href={`${ROUTES.author}/${author.id}`}>
              <AuthorCard
                imageURL={author.imageURL}
                alt={author.alt}
                name={author.name}
                activity={author.activity}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
