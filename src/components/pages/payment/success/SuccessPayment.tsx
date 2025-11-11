'use client';

import { FC } from 'react';
import { Shield, Users, Zap } from 'lucide-react';

import { PaymentLog } from '@/hooks/usePaymentLogs';
import { NextStepsService } from '@/services/NextStepsService';
import InfoCard from '@/components/common/card/InfoCard';
import PaymentLayout from '../common/PaymentLayout';
import SuccessHeader from './SuccessHeader';
import OrderDetails from './OrderDetails';
import NextSteps from './NextSteps';
import SupportCard from '@/components/common/card/SupportCard';

interface SuccessPaymentProps {
  paymentLog: PaymentLog | null;
}

const SuccessPayment: FC<SuccessPaymentProps> = ({ paymentLog }) => {
  const nextStepsData = NextStepsService.getNextStepsData();

  return (
    <PaymentLayout header={<SuccessHeader />}>
      <div className='block sm:hidden w-[calc(100% - 32px)] mx-8 h-px bg-brand-blue-light/15'></div>

      <OrderDetails paymentLog={paymentLog} />

      <div className='block sm:hidden w-[calc(100% - 32px)] mx-8 h-px bg-brand-blue-light/15'></div>
      
      <NextSteps data={nextStepsData} />

      <div className='block sm:hidden w-[calc(100% - 32px)] mx-8 h-px bg-brand-blue-light/15'></div>
      
      <SupportCard 
        icon={<Users className="w-5 h-5 md:w-6 md:h-6 text-green-600" />}
        title="Сообщество"
        description="Присоединяйтесь к телеграм-каналу для поддержки."
        linkHref="https://t.me/bot_anica"
        linkText="@bot_anica"
        footerText="Онлайн с 8:00 до 20:00 по UTC"
        isExternalLink={true}
        color="green"
        className="max-w-none md:max-w-xl md:mx-auto mt-8 mx-8 sm:mt-0 sm:mx-0 "
      />
    
      <div className='mt-4 sm:mt-0 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-8 sm:px-0'>
        <InfoCard 
          icon={<Shield className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />}
          title="Гарантия качества"
          description="Материалы проверены на практике. Доступ навсегда."
          color="orange"
        />
        <InfoCard 
          icon={<Zap className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />}
          title="Мгновенный доступ"
          description="Материалы доступны сразу после оплаты."
          color="blue"
        />
      </div>
    </PaymentLayout>
  );
};

export default SuccessPayment;