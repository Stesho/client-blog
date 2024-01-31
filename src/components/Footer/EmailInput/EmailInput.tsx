'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from '@/constants/environment';
import { emailFormSchema } from '@/constants/validationSchemas';
import { EmailFormData } from '@/types/forms';

import styles from './EmailInput.module.scss';

interface EmailInputProps {
  messages: {
    button: string;
    input: string;
  };
}

export const EmailInput = ({ messages }: EmailInputProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailFormSchema),
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
        placeholder={messages.input}
        errorMessage={errors.email?.message}
        inputDataTestid='emailInput'
        inputDataCy='emailInput'
        errorMessageDataCy='emailInputError'
      />
      <Button
        type='submit'
        dataTestid='subscribeButton'
        dataCy='subscribeButton'
      >
        {messages.button}
      </Button>
    </form>
  );
};
