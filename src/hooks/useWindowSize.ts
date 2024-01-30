'use client';

import { useLayoutEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<[number, number]>([1920, 651]);

  useLayoutEffect(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);

    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return [windowSize];
};
