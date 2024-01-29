import { AUTHORS } from '@/constants/authors';

export const getAuthorById = (id: string) =>
  AUTHORS.find((author) => author.id === id);
