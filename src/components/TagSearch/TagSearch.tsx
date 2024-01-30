import React, { ChangeEvent, useDeferredValue, useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { Post } from '@/types/post';
import styles from './TagSearch.module.scss';

interface TagSearchProps {
  posts: Post[];
}

export const TagSearch = ({ posts }: TagSearchProps) => {
  const [searchValue, setSearchValue] = useState('');
  const search = useDeferredValue(searchValue);

  const onInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        value={search}
        onChange={onInputSearch}
        className={styles.searchInput}
        placeholder='Search for tag...'
        data-testid='tagSearchInput'
      />
      <Button>Search</Button>
      {search !== '' && (
        <ul className={styles.postsList}>
          {posts
            .filter((post) =>
              post.tags.find((tag) => tag.includes(search.toLowerCase())),
            )
            .map((post) => (
              <li
                key={post.id}
                className={styles.postsItem}
                data-testid={`post${post.id}`}
              >
                <Link href={`${ROUTES.blog}/${post.id}`}>{post.title}</Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
