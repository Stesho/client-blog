import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import { ContactsForm } from '@/components/ContactsForm/ContactsForm';
import { Map } from '@/components/Map/Map';
import { ContactsInfo } from '@/components/ui/ContactsInfo/ContactsInfo';
import { PageParams } from '@/types/pageParams';

export default function Page({ params }: { params: PageParams }) {
  unstable_setRequestLocale(params.locale);
  return (
    <main>
      <ContactsInfo />
      <ContactsForm />
      <Map />
    </main>
  );
}
