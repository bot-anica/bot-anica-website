import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import { HeaderData } from '@/types/sections';
import { HeaderService } from '@/services/HeaderService';

export const useHeader = () => {
  const {courseUrlParam} = useParams<{ courseUrlParam: string }>();
  const [headerData, setHeaderData] = useState<HeaderData>();

  useEffect(() => {
    if (courseUrlParam) {
      HeaderService.getData(courseUrlParam).then(setHeaderData);
    }
  }, [courseUrlParam]);

  return headerData;
};
