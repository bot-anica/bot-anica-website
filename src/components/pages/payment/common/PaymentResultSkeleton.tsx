
import { FC } from 'react';

import PaymentLayout from './PaymentLayout';
import PaymentResultHeaderSkeleton from './PaymentResultHeaderSkeleton';
import PaymentResultDetailsSkeleton from './PaymentResultDetailsSkeleton';

const PaymentResultSkeleton: FC = () => {
  return (
    <PaymentLayout header={<PaymentResultHeaderSkeleton />}>
      <div className='block sm:hidden w-[calc(100% - 32px)] mx-8 h-px bg-primary-blue/15'></div>
        
      <PaymentResultDetailsSkeleton />
    </PaymentLayout>
  );
};

export default PaymentResultSkeleton;
