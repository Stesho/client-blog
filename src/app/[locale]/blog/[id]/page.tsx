import React from 'react';
import Image from 'next/image';
import { Join } from '@/components/ui/Join/Join';
import { BlogPostHead } from '@/components/ui/BlogPostHead/BlogPostHead';
import { WhatToRead } from '@/components/ui/WhatToRead/WhatToRead';
import { POSTS } from '@/constants/posts';
import { getPostById } from '@/utils/getPostById';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { getRecommendedPosts } from '@/utils/getRecommendedPosts';
import styles from './page.module.scss';

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getPostById(params.id);
  const recommendedPosts = getRecommendedPosts(params.id, 3);

  if (!post) {
    redirect(`${ROUTES.home}`);
  }

  return (
    <main>
      <BlogPostHead
        authorName={post.author}
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
