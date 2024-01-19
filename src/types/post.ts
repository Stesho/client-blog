import { StaticImageData } from 'next/image';

export interface Post {
  id: string;
  author: string;
  date: string;
  title: string;
  type: string;
  text: string;
  image: StaticImageData;
}
