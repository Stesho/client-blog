import React from 'react';
import { Join } from '@/components/ui/Join/Join';
import { BlogHead } from '@/components/ui/BlogHead/BlogHead';
import { BlogAllPosts } from '@/components/ui/BlogAllPosts/BlogAllPosts';
import { Categories } from '@/components/ui/Categories/Categories';

export default function Page() {
  return (
    <main>
      <BlogHead />
      <BlogAllPosts />
      <Categories />
      <Join />
    </main>
  );
}
