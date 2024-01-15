import React from 'react';
import { CategoryCard } from '@/components/ui/CategoryCard/CategoryCard';
import { CATEGORIES } from '@/constants/categories';
import { useTranslations } from 'next-intl';
import styles from './Categories.module.scss';

export const Categories = () => {
  const t = useTranslations('home.categories');

  return (
    <section className="section container">
      <h3 className={`${styles.title} heading3`}>{t('title')}</h3>
      <ul className={styles.list}>
        {CATEGORIES.map((category) => (
          <li>
            <CategoryCard
              iconURL={category.iconUrl}
              alt={category.alt}
              title={category.alt}
              text={category.text}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
