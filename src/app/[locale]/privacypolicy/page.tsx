import React from 'react';
import { PrivacyPolicy } from '@/components/ui/PrivacyPolicy/PrivacyPolicy';
import { unstable_setRequestLocale } from 'next-intl/server';
import { PageParams } from '@/types/pageParams';

export default function Page({ params }: { params: PageParams }) {
  unstable_setRequestLocale(params.locale);
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}
