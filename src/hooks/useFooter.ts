import { useState, useEffect } from 'react';

import { FooterData } from '@/types/sections';
import { FooterService } from '@/services/FooterService';

export const useFooter = () => {
  const [footerData, setFooterData] = useState<FooterData>();

  useEffect(() => {
    FooterService.getData().then(setFooterData);
  }, []);

  return footerData;
};
