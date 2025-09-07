import { useState, useEffect, useRef, RefObject } from 'react';

export const useIntersectionObserver = (options: IntersectionObserverInit = {}): [RefObject<HTMLDivElement>, boolean, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [hasIntersected, setHasIntersected] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options, hasIntersected]);

  return [ref, isIntersecting, hasIntersected];
};