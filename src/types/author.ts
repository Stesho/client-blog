import { StaticImageData } from 'next/image';

export interface Author {
  id: string;
  imageURL: StaticImageData;
  alt: string;
  name: string;
  activity: string;
}
