import React from 'react';
import { AuthorProfile } from '@/components/ui/AuthorProfile/AuthorProfile';
import { AuthorPosts } from '@/components/ui/AuthorPosts/AuthorPosts';
import { POSTS } from '@/constants/posts';
import { getAuthorPosts } from '@/utils/getAuthorPosts';

export function generateStaticParams() {
  return POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const authorPosts = getAuthorPosts(params.id);

  return (
    <main>
      <AuthorProfile />
      <AuthorPosts posts={authorPosts} />
    </main>
  );
}
