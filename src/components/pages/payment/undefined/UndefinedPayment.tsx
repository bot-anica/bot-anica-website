
import { FC } from 'react';

import PaymentLayout from '../common/PaymentLayout';
import PaymentSupport from '../common/PaymentSupport';
import UndefinedHeader from './UndefinedHeader';

const UndefinedPayment: FC = () => {
  return (
    <PaymentLayout header={<UndefinedHeader />}>
      <div className="block sm:hidden w-[calc(100% - 32px)] mx-8 h-px bg-primary-blue/15"></div>
      <PaymentSupport />
    </PaymentLayout>
  );
};

export default UndefinedPayment;
