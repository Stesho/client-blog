'use client';

import React, { useMemo, useState } from 'react';
import { BlogPostCard } from '@/components/ui/BlogPostCard/BlogPostCard';
import { CATEGORIES } from '@/constants/categories';
import { CategoryButton } from '@/components/ui/CategoryButton/CategoryButton';
import { TagButton } from '@/components/ui/TagButton/TagButton';
import { TAGS } from '@/constants/tags';
import { Post } from '@/types/post';
import { Link } from '@/navigation';
import { ROUTES } from '@/constants/routes';
import { filterPosts } from '@/utils/filterPosts';
import { TagSearch } from '@/components/TagSearch/TagSearch';
import { POSTS } from '@/constants/posts';
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

  const filteredPosts = useMemo(
    () => filterPosts(posts, selectedCategory, selectedTags),
    [posts, selectedCategory, selectedTags],
  );

  return (
    <section className={`${styles.section} section container`}>
      <ul className={styles.postsList}>
        {filteredPosts.length === 0 ? (
          <div className={styles.notFound}>Selected posts not found</div>
        ) : (
          filteredPosts.map((post) => (
            <li
              key={post.id}
              className={styles.blogListItem}
              data-testid={`post${post.id}`}
            >
              <BlogPostCard post={post} />
            </li>
          ))
        )}
      </ul>
      <div className={styles.controlBar}>
        <TagSearch posts={POSTS} />
        <div>
          <h3 className={`${styles.categoryTitle} heading2`}>Categories</h3>
          <ul className={styles.categoryList}>
            {CATEGORIES.map((category) => (
              <li key={category.id} className={styles.categoryItem}>
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
          <h3 className={`${styles.tagsTitle} heading2`}>All Tags</h3>
          <ul className={styles.tagList}>
            {TAGS.map((tag) => (
              <li key={tag}>
                <TagButton
                  name={tag}
                  onChange={onSelectTag(tag)}
                  dataTestid={`${tag}Tag`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
