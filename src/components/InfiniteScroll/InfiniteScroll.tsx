'use client';

import React, { ReactNode } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface InfiniteScrollProps {
  children: ReactNode[];
}

export const InfiniteScroll = ({ children }: InfiniteScrollProps) => {
  const { loaderRef, renderedItemsCount } = useIntersectionObserver(
    children.length,
  );

  return (
    <>
      {children.slice(0, renderedItemsCount).map((Item) => Item)}
      <div ref={loaderRef} />
    </>
  );
};
