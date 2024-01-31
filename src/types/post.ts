import { StaticImageData } from 'next/image';

import { Author } from '@/types/author';

export interface Post {
  id: string;
  author: Author;
  date: string;
  title: string;
  type: string;
  text: string;
  image: StaticImageData;
  tags: string[];
}
