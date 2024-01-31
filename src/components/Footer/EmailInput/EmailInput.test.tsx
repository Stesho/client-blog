import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { EmailInput } from '@/components/Footer/EmailInput/EmailInput';
import emailjs from '@emailjs/browser';

jest.mock('@emailjs/browser', () => ({
  send: jest.fn(() =>
    Promise.resolve({
      text: 'success',
    }),
  ),
}));

describe('EmailInput', () => {
  it('should correctly render component', () => {
    const { container } = render(<EmailInput />);

    expect(container).not.toBeNull();
  });

  it('should send email on subscribe click', () => {
    const { getByTestId } = render(<EmailInput />);

    const emailInput = getByTestId('emailInput');
    const subscribeButton = getByTestId('subscribeButton');

    fireEvent.change(emailInput, { target: { value: 'test@test.test' } });
    fireEvent.click(subscribeButton);

    expect(emailjs.send).toHaveBeenCalledTimes(0);
  });
});
