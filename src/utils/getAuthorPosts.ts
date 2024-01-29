import { POSTS } from '@/constants/posts';

export const getAuthorPosts = (authorId: string) =>
  POSTS.filter((post) => post.author.id === authorId);
