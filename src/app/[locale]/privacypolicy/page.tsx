import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import { PrivacyPolicy } from '@/components/ui/PrivacyPolicy/PrivacyPolicy';
import { PageParams } from '@/types/pageParams';

export default function Page({ params }: { params: PageParams }) {
  unstable_setRequestLocale(params.locale);
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}
