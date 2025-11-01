import { useIntersectionObserver } from './useIntersectionObserver';

export const useAnimatedSection = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  return {
    ref,
    isIntersecting: isIntersecting as boolean,
    hasIntersected: hasIntersected as boolean,
  };
};