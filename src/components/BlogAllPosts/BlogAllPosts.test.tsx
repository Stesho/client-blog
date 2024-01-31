import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { BlogAllPosts } from '@/components/BlogAllPosts/BlogAllPosts';

import '@testing-library/jest-dom';

describe('BlogAllPosts', () => {
  it('should correctly render component', () => {
    const { container } = render(<BlogAllPosts />);

    expect(container).not.toBeNull();
  });

  it('should switch next slide', () => {
    const { getByTestId } = render(<BlogAllPosts />);

    const prevButton = getByTestId('prevButton');
    const nextButton = getByTestId('nextButton');
    const post1 = getByTestId('post1');
    const post5 = getByTestId('post5');

    expect(post1).toBeInTheDocument();
    expect(post5).toBeInTheDocument();
    expect(prevButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    fireEvent.click(nextButton);

    expect(prevButton).not.toBeDisabled();
    expect(nextButton).toBeDisabled();

    const post6 = getByTestId('post6');
    const post10 = getByTestId('post10');

    expect(post6).toBeInTheDocument();
    expect(post10).toBeInTheDocument();
    expect(post1).not.toBeInTheDocument();
    expect(post5).not.toBeInTheDocument();
  });

  it('should switch prev slide', () => {
    const { getByTestId } = render(<BlogAllPosts />);

    const prevButton = getByTestId('prevButton');
    const nextButton = getByTestId('nextButton');

    fireEvent.click(nextButton);

    expect(prevButton).not.toBeDisabled();
    expect(nextButton).toBeDisabled();

    const post6 = getByTestId('post6');
    const post10 = getByTestId('post10');

    expect(post6).toBeInTheDocument();
    expect(post10).toBeInTheDocument();

    fireEvent.click(prevButton);

    expect(prevButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    const post1 = getByTestId('post1');
    const post5 = getByTestId('post5');

    expect(post1).toBeInTheDocument();
    expect(post5).toBeInTheDocument();
    expect(post6).not.toBeInTheDocument();
    expect(post10).not.toBeInTheDocument();
  });
});
