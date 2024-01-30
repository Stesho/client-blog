import React from 'react';
import { Join } from '@/components/ui/Join/Join';
import { BlogHead } from '@/components/ui/BlogHead/BlogHead';
import { BlogAllPosts } from '@/components/ui/BlogAllPosts/BlogAllPosts';
import { Categories } from '@/components/ui/Categories/Categories';
import { unstable_setRequestLocale } from 'next-intl/server';
import { PageParams } from '@/types/pageParams';

export default function BlogPage({ params }: { params: PageParams }) {
  unstable_setRequestLocale(params.locale);
  return (
    <main>
      <BlogHead />
      <BlogAllPosts />
      <Categories />
      <Join />
    </main>
  );
}
