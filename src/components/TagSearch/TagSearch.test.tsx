import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { TagSearch } from '@/components/TagSearch/TagSearch';
import { TAGS } from '@/constants/tags';
import { AUTHORS } from '@/constants/authors';
import { CATEGORIES } from '@/constants/categories';
import Blog6Img from '@/assets/img/posts/man-in-black-suit.png';
import Blog1Img from '@/assets/img/posts/photo-of-people.jpg';
import Blog3Img from '@/assets/img/posts/photo-of-people-walking.jpg';

const testPosts = [
  {
    id: '1',
    author: AUTHORS[0],
    date: 'Nov 05, 2019',
    title: 'Design tips for designers that cover everything you need',
    type: CATEGORIES[0].title,
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    image: Blog6Img,
    tags: [TAGS[0], TAGS[2]],
  },
  {
    id: '2',
    author: AUTHORS[1],
    date: 'Aug 23, 2023',
    title: 'How to build rapport with your web design clients',
    type: CATEGORIES[1].title,
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    image: Blog1Img,
    tags: [TAGS[4], TAGS[5], TAGS[1]],
  },
  {
    id: '3',
    author: AUTHORS[2],
    date: 'Jan 19, 2022',
    title: 'Logo design trends to avoid in 2022',
    type: CATEGORIES[2].title,
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    image: Blog3Img,
    tags: [TAGS[3]],
  },
];

describe('TagSearch', () => {
  it('should correctly render component', () => {
    const { container } = render(<TagSearch posts={testPosts} />);

    expect(container).not.toBeNull();
  });

  it('should search posts with passed tag', () => {
    const { getByTestId } = render(<TagSearch posts={testPosts} />);
    const tag = TAGS[0];

    const input = getByTestId('tagSearchInput');
    fireEvent.change(input, { target: { value: tag } });

    const post = getByTestId('post1');

    expect(post).toBeInTheDocument();
  });
});
