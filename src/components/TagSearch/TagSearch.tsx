import React, { ChangeEvent, useDeferredValue, useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { POSTS } from '@/constants/posts';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import styles from './TagSearch.module.scss';

export const TagSearch = () => {
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
      />
      <Button>Search</Button>
      {search !== '' && (
        <ul className={styles.postsList}>
          {POSTS.filter((post) =>
            post.tags.find((tag) => tag.includes(search.toLowerCase())),
          ).map((post) => (
            <li key={post.id} className={styles.postsItem}>
              <Link href={`${ROUTES.blog}/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
