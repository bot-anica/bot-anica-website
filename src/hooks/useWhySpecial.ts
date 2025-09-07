import { useState, useCallback } from 'react';
import { useParams } from 'next/navigation';

import { WhySpecialService } from '@/services/WhySpecialService';

export const useWhySpecial = () => {
  const { courseUrlParam } = useParams<{ courseUrlParam: string }>();
  const [activePoint, setActivePoint] = useState(0);

  const setActivePointIndex = useCallback(async (index: number) => {
    if (courseUrlParam) {
      const isValid = await WhySpecialService.validateWhySpecialPointIndex(courseUrlParam, index);
      if (isValid) {
        setActivePoint(index);
      }
    }
  }, [courseUrlParam]);

  return {
    activePoint,
    setActivePointIndex,
  };
};