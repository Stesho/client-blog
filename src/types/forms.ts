import * as yup from 'yup';
import {
  contactsFormSchema,
  emailFormSchema,
} from '@/constants/validationSchemas';

export type ContactsFormData = yup.InferType<typeof contactsFormSchema>;
export type EmailFormData = yup.InferType<typeof emailFormSchema>;
