import { useEffect, useRef, useState } from 'react';

interface Options {
  root: null;
  rootMargin: string;
  threshold: number;
}

const initialOptions: Options = {
  root: null,
  rootMargin: '0px 0px 100px 0px',
  threshold: 0,
};

export const useIntersectionObserver = (
  itemsLength: number,
  options = initialOptions,
) => {
  const [renderedItemsCount, setRenderedItemsCount] = useState(0);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [target] = entries;
      if (target.isIntersecting && renderedItemsCount < itemsLength) {
        setRenderedItemsCount((prev) => prev + 1);
      }
    }, options);

    const {current} = loaderRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [itemsLength, options, renderedItemsCount]);

  return {
    loaderRef,
    renderedItemsCount,
  };
};
