import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import { FooterData } from '@/types/sections';
import { FooterService } from '@/services/FooterService';

export const useFooter = () => {
  const {courseUrlParam} = useParams<{ courseUrlParam: string }>();
  const [footerData, setFooterData] = useState<FooterData>();

  useEffect(() => {
    if (courseUrlParam) {
      FooterService.getData(courseUrlParam).then(setFooterData);
    }
  }, [courseUrlParam]);

  return footerData;
};
