import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import { CategoryList } from '@/components/CategoryList/CategoryList';
import { CategoryHead } from '@/components/ui/CategoryHead/CategoryHead';
import { POSTS } from '@/constants/posts';
import { PageParams } from '@/types/pageParams';

export default function Page({
  params,
}: {
  params: PageParams & { category: string };
}) {
  unstable_setRequestLocale(params.locale);
  return (
    <main>
      <CategoryHead category={params.category} />
      <CategoryList posts={POSTS} selectedCategory={params.category} />
    </main>
  );
}
