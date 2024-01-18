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
      <p className={`${styles.text} section container body1`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non.
      </p>
      <WhatToRead />
      <Join />
    </main>
  );
}
