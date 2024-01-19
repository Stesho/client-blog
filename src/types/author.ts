import { StaticImageData } from 'next/image';

export interface Author {
  imageURL: StaticImageData;
  alt: string;
  name: string;
  activity: string;
}
