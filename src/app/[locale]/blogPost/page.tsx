import React from 'react';
import Image from 'next/image';
import Photo from '@/assets/img/blogPost/photo-of-woman.jpg';
import { Join } from '@/components/ui/Join/Join';
import { BlogPostHead } from '@/components/ui/BlogPostHead/BlogPostHead';
import { WhatToRead } from '@/components/ui/WhatToRead/WhatToRead';
import styles from './page.module.scss';

export default function BlogPost() {
  return (
    <main>
      <BlogPostHead />
      <Image
        className={`${styles.image} container`}
        src={Photo}
        alt='photo of woman'
      />
      <WhatToRead />
      <Join />
    </main>
  );
}
