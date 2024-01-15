'use client';

import React, { ChangeEvent, useTransition } from 'react';
import { locales } from '@/i18n';
import { LANGS } from '@/constants/langs';
import { useRouter, usePathname } from 'next/navigation';
import { Locale } from '@/types/lang';
import { useLocale } from 'next-intl';
import { getUpdatedPathname } from '@/utils/getUpdatedPathname';
import styles from './LangSelect.module.scss';

export const LangSelect = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(getUpdatedPathname(pathname, nextLocale));
    });
  };

  return (
    <div>
      <select
        className={styles.select}
        onChange={onChange}
        defaultValue={locale}
        disabled={isPending}
      >
        {locales.map((lang) => (
          <option key={lang} value={lang}>
            {LANGS[lang]}
          </option>
        ))}
      </select>
    </div>
  );
};
