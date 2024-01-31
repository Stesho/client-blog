import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import { BlogAllPosts } from '@/components/BlogAllPosts/BlogAllPosts';
import { BlogHead } from '@/components/ui/BlogHead/BlogHead';
import { Categories } from '@/components/ui/Categories/Categories';
import { Join } from '@/components/ui/Join/Join';
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
