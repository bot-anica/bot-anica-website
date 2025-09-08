import { useState, useEffect } from 'react';

export function useImageDimensions(src: string) {
  const [dimensions, setDimensions] = useState<{width: number, height: number} | null>(null);

  useEffect(() => {
    if (src) {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setDimensions({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };
    }
  }, [src]);

  return dimensions;
}
