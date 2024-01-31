import React from 'react';
import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import { Testimonials } from '@/components/Testimonials/Testimonials';

describe('Testimonials', () => {
  it('should correctly render component', () => {
    const { container } = render(<Testimonials />);

    expect(container).not.toBeNull();
  });

  it('should switch slides', () => {
    const { getByTestId } = render(<Testimonials />);

    const prevButton = getByTestId('testimonialsPrevButton');
    const nextButton = getByTestId('testimonialsNextButton');

    expect(prevButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(prevButton).not.toBeDisabled();
    expect(nextButton).toBeDisabled();
  });
});
