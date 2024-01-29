import React from 'react';
import { CategoryHead } from '@/components/ui/CategoryHead/CategoryHead';
import { CategoryList } from '@/components/CategoryList/CategoryList';
import { POSTS } from '@/constants/posts';

export default function Page({ params }: { params: { category: string } }) {
  return (
    <main>
      <CategoryHead category={params.category} />
      <CategoryList posts={POSTS} selectedCategory={params.category} />
    </main>
  );
}
