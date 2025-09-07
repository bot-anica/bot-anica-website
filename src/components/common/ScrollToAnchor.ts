"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

function ScrollToAnchor() {
  const pathname = usePathname();
  const lastHash = useRef('');

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (pathname) {
      lastHash.current = pathname.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [pathname]);

  return null;
}

export default ScrollToAnchor;
