import * as yup from 'yup';

import { ERROR_MESSAGES } from '@/constants/errorMessages';

export const contactsFormSchema = yup.object({
  name: yup
    .string()
    .required(ERROR_MESSAGES.required('Name'))
    .min(2, ERROR_MESSAGES.min('Name', 2))
    .max(50, ERROR_MESSAGES.max('Name', 50)),
  email: yup
    .string()
    .email(ERROR_MESSAGES.email)
    .required(ERROR_MESSAGES.required('Email')),
  message: yup.string().required(ERROR_MESSAGES.required('Message')),
});

export const emailFormSchema = yup.object({
  email: yup
    .string()
    .email(ERROR_MESSAGES.email)
    .required(ERROR_MESSAGES.required('Email')),
});
