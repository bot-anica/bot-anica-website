'use client';

import { FC, Suspense } from 'react';

import { usePaymentSuccess } from '@/hooks/usePaymentSuccess';
import SuccessPayment from '@/components/pages/payment/success/SuccessPayment';
import FailPayment from '@/components/pages/payment/fail/FailPayment';
import UndefinedPayment from '@/components/pages/payment/undefined/UndefinedPayment';
import PaymentResultSkeleton from '@/components/pages/payment/common/PaymentResultSkeleton';

const PaymentResultContent: FC = () => {
  const { paymentLog, isLoading, error } = usePaymentSuccess();

  if (isLoading) {
    return <PaymentResultSkeleton />;
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
    <Suspense fallback={<PaymentResultSkeleton />}>
      <PaymentResultContent />
    </Suspense>
  );
};

export default PaymentResultPage;