import React from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { BlogAllPosts } from '@/components/BlogAllPosts/BlogAllPosts';
import { BlogHead } from '@/components/ui/BlogHead/BlogHead';
import { Categories } from '@/components/ui/Categories/Categories';
import { Join } from '@/components/ui/Join/Join';
import { PageParams } from '@/types/pageParams';

export default function BlogPage({ params }: { params: PageParams }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations('blog');

  return (
    <main>
      <BlogHead />
      <BlogAllPosts
        messages={{
          title: t('allPosts.title'),
          prevButton: t('allPosts.prevButton'),
          nextButton: t('allPosts.nextButton'),
        }}
      />
      <Categories />
      <Join />
    </main>
  );
}
