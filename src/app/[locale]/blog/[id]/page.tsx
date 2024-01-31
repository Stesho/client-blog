import React from 'react';
import Image from 'next/image';
import { unstable_setRequestLocale } from 'next-intl/server';

import { BlogPostHead } from '@/components/ui/BlogPostHead/BlogPostHead';
import { Join } from '@/components/ui/Join/Join';
import { WhatToRead } from '@/components/ui/WhatToRead/WhatToRead';
import { POSTS } from '@/constants/posts';
import { ROUTES } from '@/constants/routes';
import { redirect } from '@/navigation';
import { PageParams } from '@/types/pageParams';
import { getPostById } from '@/utils/getPostById';
import { getRecommendedPosts } from '@/utils/getRecommendedPosts';

import styles from './page.module.scss';

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
        authorName={post.author.name}
        postedDate={post.date}
        title={post.title}
        type={post.type}
      />
      <Image
        className={`${styles.image} container`}
        src={post.image}
        alt='photo of woman'
      />
      <p className={`${styles.text} section container body1`}>{post.text}</p>
      <WhatToRead posts={recommendedPosts} />
      <Join />
    </main>
  );
}
