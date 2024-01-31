import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import { AuthorPosts } from '@/components/ui/AuthorPosts/AuthorPosts';
import { AuthorProfile } from '@/components/ui/AuthorProfile/AuthorProfile';
import { AUTHORS } from '@/constants/authors';
import { ROUTES } from '@/constants/routes';
import { redirect } from '@/navigation';
import { PageParams } from '@/types/pageParams';
import { getAuthorById } from '@/utils/getAuthorById';
import { getAuthorPosts } from '@/utils/getAuthorPosts';

export function generateStaticParams() {
  return AUTHORS.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function Page({
  params,
}: {
  params: PageParams & { id: string };
}) {
  unstable_setRequestLocale(params.locale);
  const author = getAuthorById(params.id);
  const authorPosts = getAuthorPosts(params.id);

  if (!author) {
    return redirect(`${ROUTES.home}`);
  }

  return (
    <main>
      <AuthorProfile author={author} />
      <AuthorPosts posts={authorPosts} />
    </main>
  );
}
