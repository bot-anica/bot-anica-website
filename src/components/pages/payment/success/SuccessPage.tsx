
'use client';

import { FC } from 'react';

import SuccessPayment from './SuccessPayment';
import { usePaymentSuccess } from '@/hooks/usePaymentSuccess';
import SuccessPaymentSkeleton from './SuccessPaymentSkeleton';
import CourseNotFound from '@/components/pages/prePayment/CourseNotFound';

const SuccessPage: FC = () => {
  const { paymentLog, isLoading, error } = usePaymentSuccess();

  if (isLoading) {
    return <SuccessPaymentSkeleton />;
  }

  // Handle critical errors, but allow rendering for "email not found"
  if (error && error !== 'Email не найден. Пожалуйста, попробуйте снова.') {
    return <CourseNotFound message={error} />;
  }

  return <SuccessPayment paymentLog={paymentLog} />;
};

export default SuccessPage;
