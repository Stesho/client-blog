import React from 'react';
import { ContactsInfo } from '@/components/ui/ContactsInfo/ContactsInfo';
import { ContactsForm } from '@/components/ContactsForm/ContactsForm';
import { Map } from '@/components/Map/Map';

export default function Page() {
  return (
    <main>
      <ContactsInfo />
      <ContactsForm />
      <Map />
    </main>
  );
}
