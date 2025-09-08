"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function ScrollToAnchor() {
  const pathname = usePathname();

  const scrollTo = (hash: string) => {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleHashChange = () => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const element = document.getElementById(hash);
    if (element) {
      scrollTo(hash);
    } else {
      // Poll for the element to appear
      let attempts = 0;
      const maxAttempts = 50; // roughly 5 seconds
      const interval = 100;

      const poll = () => {
        const el = document.getElementById(hash);
        if (el) {
          scrollTo(hash);
        } else {
          attempts++;
          if (attempts < maxAttempts) {
            setTimeout(poll, interval);
          }
        }
      };
      poll();
    }
  };

  useEffect(() => {
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname]);

  return null;
}

export default ScrollToAnchor;