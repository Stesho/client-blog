'use client';

import React, { useMemo, useState } from 'react';

import { TagSearch } from '@/components/TagSearch/TagSearch';
import { BlogPostCard } from '@/components/ui/BlogPostCard/BlogPostCard';
import { CategoryButton } from '@/components/ui/CategoryButton/CategoryButton';
import { TagButton } from '@/components/ui/TagButton/TagButton';
import { CATEGORIES } from '@/constants/categories';
import { POSTS } from '@/constants/posts';
import { ROUTES } from '@/constants/routes';
import { TAGS } from '@/constants/tags';
import { Link } from '@/navigation';
import { Post } from '@/types/post';
import { filterPosts } from '@/utils/filterPosts';

import styles from './CategoryList.module.scss';

interface CategoryListProps {
  selectedCategory: string;
  posts: Post[];
  messages: {
    notFound: string;
    search: {
      input: string;
      button: string;
    };
    categories: {
      title: string;
    };
    tags: {
      title: string;
    };
  };
}

export const CategoryList = ({
  selectedCategory,
  posts,
  messages,
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
          <div className={styles.notFound}>{messages.notFound}</div>
        ) : (
          filteredPosts.map((post) => (
            <li
              key={post.id}
              className={styles.blogListItem}
              data-testid={`post${post.id}`}
              data-cy={`post${post.id}`}
            >
              <BlogPostCard post={post} />
            </li>
          ))
        )}
      </ul>
      <div className={styles.controlBar}>
        <TagSearch
          posts={POSTS}
          messages={{
            input: messages.search.input,
            button: messages.search.button,
          }}
        />
        <div>
          <h3 className={`${styles.categoryTitle} heading2`}>
            {messages.categories.title}
          </h3>
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
                    dataCy={`${category.title}Button`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={`${styles.tagsTitle} heading2`}>
            {messages.tags.title}
          </h3>
          <ul className={styles.tagList}>
            {TAGS.map((tag) => (
              <li key={tag}>
                <TagButton
                  name={tag}
                  onChange={onSelectTag(tag)}
                  dataTestid={`${tag}Tag`}
                  dataCy={`${tag}Tag`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
