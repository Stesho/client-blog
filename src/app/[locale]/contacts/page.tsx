import React from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { ContactsForm } from '@/components/ContactsForm/ContactsForm';
import { Map } from '@/components/Map/Map';
import { ContactsInfo } from '@/components/ui/ContactsInfo/ContactsInfo';
import { PageParams } from '@/types/pageParams';

export default function Page({ params }: { params: PageParams }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations('contacts.form');

  return (
    <main>
      <ContactsInfo />
      <ContactsForm
        messages={{
          name: t('name'),
          email: t('email'),
          message: t('message'),
          send: t('send'),
        }}
      />
      <Map />
    </main>
  );
}
