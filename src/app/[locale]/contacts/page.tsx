import React from 'react';
import { ContactsInfo } from '@/components/ui/ContactsInfo/ContactsInfo';
import { ContactsForm } from '@/components/ContactsForm/ContactsForm';

export default function Page() {
  return (
    <main>
      <ContactsInfo />
      <ContactsForm />
    </main>
  );
}
