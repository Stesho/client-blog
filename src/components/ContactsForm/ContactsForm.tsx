'use client';

import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';

import { Notification } from '@/components/Notification/Notification';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from '@/constants/environment';
import { contactsFormSchema } from '@/constants/validationSchemas';
import { ContactsFormData } from '@/types/forms';

import styles from './ContactsForm.module.scss';

interface ContactsFormProps {
  messages: {
    name: string;
    email: string;
    message: string;
    send: string;
  };
}

export const ContactsForm = ({ messages }: ContactsFormProps) => {
  const [isNotification, setIsNotification] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactsFormSchema),
  });

  const onCloseNotification = useCallback(() => setIsNotification(false), []);

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

    setIsNotification(true);
    reset();
  };

  return (
    <form
      className={`${styles.form} container`}
      onSubmit={handleSubmit(sendEmail)}
      data-cy='contactsForm'
    >
      <Input
        placeholder={messages.name}
        label='name'
        register={register}
        errorMessage={errors.name?.message}
        inputDataTestid='nameInput'
        inputDataCy='contactsNameInput'
        errorMessageDataCy='contactsNameInputError'
      />
      <Input
        placeholder={messages.email}
        label='email'
        register={register}
        errorMessage={errors.email?.message}
        inputDataTestid='emailInput'
        inputDataCy='contactsEmailInput'
        errorMessageDataCy='contactsEmailInputError'
      />
      <Textarea
        placeholder={messages.message}
        label='message'
        register={register}
        errorMessage={errors.message?.message}
        inputDataTestid='messageInput'
        inputDataCy='contactsMessageInput'
        errorMessageDataCy='contactsMessageInputError'
      />
      <Button type='submit' dataTestid='sendButton' dataCy='sendButton'>
        {messages.send}
      </Button>
      {isNotification && (
        <Notification text='message sent' onClose={onCloseNotification} />
      )}
    </form>
  );
};
