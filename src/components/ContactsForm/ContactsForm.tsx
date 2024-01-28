'use client';

import React, { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from '@/constants/environment';
import styles from './ContactsForm.module.scss';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Dmitry',
      message,
    };

    emailjs
      .send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams,
        EMAIL_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <form className={`${styles.form} container`} onSubmit={sendEmail}>
      <Input placeholder='Full name' value={name} onChange={setName} />
      <Input placeholder='Your Email' value={email} onChange={setEmail} />
      <Textarea placeholder='Message' value={message} onChange={setMessage} />
      <Button type='submit'>Send Message</Button>
    </form>
  );
};
