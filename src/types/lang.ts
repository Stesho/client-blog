import { LANGS } from '@/constants/langs';

export type Lang = typeof LANGS;
export type Locale = keyof Lang;
