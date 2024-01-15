import React from 'react';
import { BlogPostCard } from '@/components/ui/BlogPostCard/BlogPostCard';
import { CategoryCard } from '@/components/ui/CategoryCard/CategoryCard';
import { AuthorCard } from '@/components/ui/AuthorCard/AuthorCard';
import BlogImage from '@/assets/img/blogPost/two-women-in-front-of-board.png';
import BusinessIcon from '@/assets/img/category/business.png';
import AuthorImage from '@/assets/img/author/man-in-yellow.png';
import { BlogCard } from '@/components/ui/BlogCard/BlogCard';
import { CategoryButton } from '@/components/ui/CategoryButton/CategoryButton';
import { Input } from '@/components/ui/Input/Input';
import { HomeInfo } from '@/components/ui/HomeInfo/HomeInfo';

export default function Home() {
  return (
    <main>
      <HomeInfo />
      <BlogPostCard
        imageURL={BlogImage}
        alt='two women in front of board'
        type='Startup'
        title='Subscribe to our news letter to get latest updates and news'
        text='Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident.'
      />
      <CategoryCard
        iconURL={BusinessIcon}
        alt='business'
        title='Business'
        text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
      />
      <AuthorCard
        imageURL={AuthorImage}
        alt='author'
        name='Floyd Miles'
        activity='Content Writer @Company'
      />
      <BlogCard
        imageURL={BlogImage}
        alt='two women in front of board'
        author='John Doe'
        date='Aug 23, 2023'
        title='A UX Case Study Creating a Studious Environment for Students: '
        text='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
      />
      <CategoryButton
        imageURL={BusinessIcon}
        alt='business'
        caption='Business'
      />
      <Input placeholder='Email' />
    </main>
  );
}
