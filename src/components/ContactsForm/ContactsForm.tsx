import React from 'react';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import styles from './ContactsForm.module.scss';

export const ContactsForm = () => (
    <form className={`${styles.form} container`}>
      <Input placeholder='Full name' />
      <Input placeholder='Your Email' />
      <Input placeholder='Query Related' />
      <Textarea placeholder='Message' />
      <Button>Send Message</Button>
    </form>
  );
