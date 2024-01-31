'use client';

import React, { ChangeEvent, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { LANGS } from '@/constants/langs';
import { locales } from '@/i18n';
import { Locale } from '@/types/lang';
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
        data-cy='langSelect'
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
