
'use client';
import { FC, useState, useEffect } from 'react';

import FailPayment from './FailPayment';
import FailPaymentSkeleton from './FailPaymentSkeleton';

const FailPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <FailPaymentSkeleton />;
  }

  return <FailPayment />;
};

export default FailPage;
