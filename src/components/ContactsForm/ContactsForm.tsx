'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from '@/constants/environment';
import { contactsFormSchema } from '@/constants/validationSchemas';
import { ContactsFormData } from '@/types/forms';
import styles from './ContactsForm.module.scss';

export const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactsFormSchema),
  });

  const sendEmail = (data: ContactsFormData) => {
    const { email, message, name } = data;

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
    <form
      className={`${styles.form} container`}
      onSubmit={handleSubmit(sendEmail)}
    >
      <Input
        placeholder='Full name'
        label='name'
        register={register}
        errorMessage={errors.name?.message}
      />
      <Input
        placeholder='Your Email'
        label='email'
        register={register}
        errorMessage={errors.email?.message}
      />
      <Textarea
        placeholder='Message'
        label='message'
        register={register}
        errorMessage={errors.message?.message}
      />
      <Button type='submit'>Send Message</Button>
    </form>
  );
};
