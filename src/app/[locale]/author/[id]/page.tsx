import React from 'react';
import { AuthorProfile } from '@/components/ui/AuthorProfile/AuthorProfile';
import { AuthorPosts } from '@/components/ui/AuthorPosts/AuthorPosts';
import { getAuthorPosts } from '@/utils/getAuthorPosts';
import { AUTHORS } from '@/constants/authors';
import { getAuthorById } from '@/utils/getAuthorById';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

export function generateStaticParams() {
  return AUTHORS.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const author = getAuthorById(params.id);
  const authorPosts = getAuthorPosts(params.id);

  if (!author) {
    redirect(`${ROUTES.home}`);
  }

  return (
    <main>
      <AuthorProfile author={author} />
      <AuthorPosts posts={authorPosts} />
    </main>
  );
}
