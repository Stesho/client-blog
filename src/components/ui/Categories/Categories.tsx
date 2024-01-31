import React from 'react';
import { useTranslations } from 'next-intl';

import { CategoryCard } from '@/components/ui/CategoryCard/CategoryCard';
import { CATEGORIES } from '@/constants/categories';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/navigation';

import styles from './Categories.module.scss';

export const Categories = () => {
  const t = useTranslations('home.categories');

  return (
    <section className='section container' data-cy='categories'>
      <h3 className={`${styles.title} heading3`}>{t('title')}</h3>
      <ul className={styles.list}>
        {CATEGORIES.map((category) => (
          <li key={category.id}>
            <Link href={`${ROUTES.category}/${category.title}`}>
              <CategoryCard
                iconURL={category.iconUrl}
                alt={category.alt}
                title={category.alt}
                text={category.text}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
