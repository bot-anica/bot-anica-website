import { useState, useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';

import { HeaderData } from '@/types/sections';
import { HeaderService } from '@/services/HeaderService';

export const useHeader = () => {
  const pathname = usePathname();

  const {courseUrlParam} = useParams<{ courseUrlParam: string }>();
  const [headerData, setHeaderData] = useState<HeaderData>();

  useEffect(() => {
    if (courseUrlParam) {
      HeaderService.getCoursePageData(courseUrlParam).then(setHeaderData);
    } else if (!courseUrlParam && pathname === "/") {
      HeaderService.getHomePageData().then(setHeaderData);
    }
  }, [courseUrlParam, pathname]);

  return headerData;
};
