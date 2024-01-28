'use client';

import React, { useState } from 'react';
import { BlogPostCard } from '@/components/ui/BlogPostCard/BlogPostCard';
import { Input } from '@/components/ui/Input/Input';
import { CATEGORIES } from '@/constants/categories';
import { CategoryButton } from '@/components/ui/CategoryButton/CategoryButton';
import { TagButton } from '@/components/ui/TagButton/TagButton';
import { TAGS } from '@/constants/tags';
import { Post } from '@/types/post';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { filterPosts } from '@/utils/filterPosts';
import styles from './CategoryList.module.scss';

interface CategoryListProps {
  selectedCategory: string;
  posts: Post[];
}

export const CategoryList = ({
  selectedCategory,
  posts,
}: CategoryListProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onSelectTag = (newTag: string) => () => {
    setSelectedTags((prev) => {
      const existedTag = prev.find((tag) => tag === newTag);

      if (!existedTag) {
        return [...prev, newTag];
      }

      return prev.filter((tag) => tag !== newTag);
    });
  };

  return (
    <section className={`${styles.section} section container`}>
      <ul>
        {filterPosts(posts, selectedCategory, selectedTags).map((post) => (
          <li key={post.id} className={styles.blogListItem}>
            <BlogPostCard
              imageURL={post.image}
              alt={post.title}
              type={post.type}
              title={post.title}
              text={post.text}
            />
          </li>
        ))}
      </ul>
      <div className={styles.controlBar}>
        <div>
          <Input />
          <Button>Search</Button>
        </div>
        <div>
          <h3 className="heading2">Categories</h3>
          <ul>
            {CATEGORIES.map((category) => (
              <li key={category.id}>
                <Link
                  href={`${ROUTES.category}/${category.title}`}
                  scroll={false}
                >
                  <CategoryButton
                    id={category.id.toString()}
                    imageURL={category.iconUrl}
                    alt={category.alt}
                    caption={category.title}
                    isChecked={selectedCategory === category.title}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="heading2">All Tags</h3>
          <ul className={styles.tagList}>
            {TAGS.map((tag) => (
              <li key={tag}>
                <TagButton name={tag} onChange={onSelectTag(tag)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
