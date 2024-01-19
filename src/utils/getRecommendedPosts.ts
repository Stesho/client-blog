import { POSTS } from '@/constants/posts';

export const getRecommendedPosts = (id: string, count: number) =>
  POSTS.filter((post) => post.id !== id).slice(0, count);
