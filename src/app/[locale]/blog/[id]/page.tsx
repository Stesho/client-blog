import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import { BlogPostContent } from '@/components/ui/BlogPostContent/BlogPostContent';
import { BlogPostHead } from '@/components/ui/BlogPostHead/BlogPostHead';
import { Join } from '@/components/ui/Join/Join';
import { WhatToRead } from '@/components/ui/WhatToRead/WhatToRead';
import { POSTS } from '@/constants/posts';
import { ROUTES } from '@/constants/routes';
import { redirect } from '@/navigation';
import { PageParams } from '@/types/pageParams';
import { getPostById } from '@/utils/getPostById';
import { getRecommendedPosts } from '@/utils/getRecommendedPosts';

export function generateStaticParams() {
  return POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPost({
  params,
}: {
  params: PageParams & { id: string };
}) {
  unstable_setRequestLocale(params.locale);
  const post = getPostById(params.id);
  const recommendedPosts = getRecommendedPosts(params.id, 3);

  if (!post) {
    return redirect(`${ROUTES.home}`);
  }

  return (
    <main>
      <BlogPostHead
        author={post.author}
        postedDate={post.date}
        title={post.title}
        type={post.type}
      />
      <BlogPostContent post={post} />
      <WhatToRead posts={recommendedPosts} />
      <Join />
    </main>
  );
}
