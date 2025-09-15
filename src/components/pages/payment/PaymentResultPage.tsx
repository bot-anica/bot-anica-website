'use client';

import { FC, Suspense } from 'react';

import { usePaymentSuccess } from '@/hooks/usePaymentSuccess';
import SuccessPayment from '@/components/pages/payment/success/SuccessPayment';
import FailPayment from '@/components/pages/payment/fail/FailPayment';
import UndefinedPayment from '@/components/pages/payment/undefined/UndefinedPayment';
import SuccessPaymentSkeleton from '@/components/pages/payment/success/SuccessPaymentSkeleton';

const PaymentResultContent: FC = () => {
  const { paymentLog, isLoading, error } = usePaymentSuccess();

  if (isLoading) {
    return <SuccessPaymentSkeleton />;
  }

  if (error || !paymentLog) {
    return <UndefinedPayment />;
  }

  if (paymentLog.status === 'success') {
    return <SuccessPayment paymentLog={paymentLog} />;
  }

  // If status is 'fail' or anything else, show the fail page.
  return <FailPayment />;
};

const PaymentResultPage: FC = () => {
  return (
    <Suspense fallback={<SuccessPaymentSkeleton />}>
      <PaymentResultContent />
    </Suspense>
  );
};

export default PaymentResultPage;