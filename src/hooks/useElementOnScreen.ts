import { useEffect, useRef, useState } from 'react';

interface Options {
  root: null;
  rootMargin: string;
  threshold: number;
}

export const useElementOnScreen = (options: Options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const {current} = containerRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};
