import React from 'react';
import emailjs from '@emailjs/browser';
import { fireEvent, render } from '@testing-library/react';

import { ContactsForm } from '@/components/ContactsForm/ContactsForm';

import '@testing-library/jest-dom';

jest.mock('@emailjs/browser', () => ({
  send: jest.fn(() =>
    Promise.resolve({
      text: 'success',
    }),
  ),
}));

describe('ContactsForm', () => {
  it('', () => {
    const { container } = render(<ContactsForm />);

    expect(container).not.toBeNull();
  });

  it('', () => {
    const { getByTestId } = render(<ContactsForm />);

    const nameInput = getByTestId('nameInput');
    const emailInput = getByTestId('emailInput');
    const messageInput = getByTestId('messageInput');
    const sendButton = getByTestId('sendButton');

    fireEvent.change(nameInput, { target: { value: 'name' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.test' } });
    fireEvent.change(messageInput, { target: { value: 'message' } });
    fireEvent.click(sendButton);

    expect(emailjs.send).toHaveBeenCalledTimes(0);
  });
});
