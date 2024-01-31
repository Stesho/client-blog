import React from 'react';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('categories');

  return (
    <main>
      <CategoryHead category={params.category} />
      <CategoryList
        posts={POSTS}
        selectedCategory={params.category}
        messages={{
          notFound: t('notFound'),
          search: {
            input: t('search.input'),
            button: t('search.button'),
          },
          categories: {
            title: t('categories.title'),
          },
          tags: {
            title: t('tags.title'),
          },
        }}
      />
    </main>
  );
}
