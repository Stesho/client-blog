import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { VideoModal } from '@/components/VideoModal/VideoModal';

import '@testing-library/jest-dom';

describe('VideoModal', () => {
  it('should correctly render component', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<VideoModal onClose={onClose} />);

    const video = getByTestId('videoModal');

    expect(video).toBeInTheDocument();
  });

  it('should close modal on button click', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<VideoModal onClose={onClose} />);

    const closeButton = getByTestId('modalCloseButton');
    fireEvent.click(closeButton);

    expect(onClose).toBeCalled();
  });
});
