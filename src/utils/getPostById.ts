import { POSTS } from '@/constants/posts';

export const getPostById = (id: string) => POSTS.find((post) => post.id === id);
