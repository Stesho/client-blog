import Blog5Img from '@/assets/img/blogPost/two-women-in-front-of-board.png';
import Blog6Img from '@/assets/img/posts/man-in-black-suit.png';
import Blog1Img from '@/assets/img/posts/photo-of-people.jpg';
import Blog3Img from '@/assets/img/posts/photo-of-people-walking.jpg';
import Blog2Img from '@/assets/img/posts/photo-of-woman.jpg';
import Blog4Img from '@/assets/img/posts/white-concrete-building.png';
import { AUTHORS } from '@/constants/authors';
import { CATEGORIES } from '@/constants/categories';
import { POST_TEXT } from '@/constants/postText';
import { TAGS } from '@/constants/tags';
import { Post } from '@/types/post';

export const POSTS: Post[] = [
  {
    id: '1',
    author: AUTHORS[0],
    date: 'Nov 05, 2019',
    title: 'Design tips for designers that cover everything you need',
    type: CATEGORIES[0].title,
    text: POST_TEXT,
    image: Blog6Img,
    tags: [TAGS[0], TAGS[2]],
  },
  {
    id: '2',
    author: AUTHORS[1],
    date: 'Aug 23, 2023',
    title: 'How to build rapport with your web design clients',
    type: CATEGORIES[1].title,
    text: POST_TEXT,
    image: Blog1Img,
    tags: [TAGS[4], TAGS[5], TAGS[1]],
  },
  {
    id: '3',
    author: AUTHORS[2],
    date: 'Jan 19, 2022',
    title: 'Logo design trends to avoid in 2022',
    type: CATEGORIES[2].title,
    text: POST_TEXT,
    image: Blog3Img,
    tags: [TAGS[3]],
  },
  {
    id: '4',
    author: AUTHORS[3],
    date: 'May 11, 2023',
    title: '8 Figma design systems you can download for free today',
    type: CATEGORIES[3].title,
    text: POST_TEXT,
    image: Blog4Img,
    tags: [TAGS[1], TAGS[3]],
  },
  {
    id: '5',
    author: AUTHORS[4],
    date: 'Feb 09, 2022',
    title: 'Font sizes in UI design: The complete guide to follow',
    type: CATEGORIES[1].title,
    text: POST_TEXT,
    image: Blog5Img,
    tags: [TAGS[0], TAGS[5]],
  },
  {
    id: '6',
    author: AUTHORS[5],
    date: 'Oct 02, 2021',
    title: 'Font sizes in UI design: The complete guide to follow',
    type: CATEGORIES[1].title,
    text: POST_TEXT,
    image: Blog3Img,
    tags: [TAGS[4]],
  },
  {
    id: '7',
    author: AUTHORS[6],
    date: 'Dec 20, 2023',
    title: '8 Figma design systems you can download for free today',
    type: CATEGORIES[0].title,
    text: POST_TEXT,
    image: Blog5Img,
    tags: [TAGS[2]],
  },
  {
    id: '8',
    author: AUTHORS[7],
    date: 'Mar 30, 2022',
    title: 'Font sizes in UI design: The complete guide to follow',
    type: CATEGORIES[2].title,
    text: POST_TEXT,
    image: Blog1Img,
    tags: [TAGS[2], TAGS[4]],
  },
  {
    id: '9',
    author: AUTHORS[1],
    date: 'Jun 26, 2021',
    title: '8 Figma design systems you can download for free today',
    type: CATEGORIES[2].title,
    text: POST_TEXT,
    image: Blog2Img,
    tags: [TAGS[1], TAGS[3], TAGS[5]],
  },
  {
    id: '10',
    author: AUTHORS[2],
    date: 'Nov 05, 2023',
    title: 'The complete guide to follow',
    type: CATEGORIES[3].title,
    text: POST_TEXT,
    image: Blog4Img,
    tags: [TAGS[1], TAGS[2], TAGS[3], TAGS[4]],
  },
];
