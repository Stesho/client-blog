import { Post } from '@/types/post';

export const filterPosts = (posts: Post[], category: string, tags: string[]) =>
  posts.filter(
    (post) =>
      post.type === category &&
      (tags.length === 0 || tags.every((tag) => post.tags.includes(tag))),
  );
