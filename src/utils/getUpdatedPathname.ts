import { locales } from '@/i18n';
import { Locale } from '@/types/lang';

export const getUpdatedPathname = (pathname: string, locale: Locale) => {
  if (!pathname) {
    return '/';
  }

  const localesRegExp = new RegExp(locales.join('|'));

  return pathname.replace(localesRegExp, locale);
};
