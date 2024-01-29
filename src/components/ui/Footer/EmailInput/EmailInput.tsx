'use client';

import React from 'react';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactsFormSchema } from '@/constants/validationSchemas';
import { EmailFormData } from '@/types/forms';
import emailjs from '@emailjs/browser';
import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from '@/constants/environment';
import styles from './EmailInput.module.scss';

export const EmailInput = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactsFormSchema),
  });

  const sendEmail = (data: EmailFormData) => {
    const { email } = data;

    const templateParams = {
      from_name: 'User',
      from_email: email,
      to_name: 'Dmitry',
      message: 'Message',
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

    setValue('email', '');
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(sendEmail)}>
      <Input
        label='email'
        register={register}
        className={styles.input}
        placeholder='Enter Your Email'
        errorMessage={errors.email?.message}
      />
      <Button type='submit'>Subscribe</Button>
    </form>
  );
};
