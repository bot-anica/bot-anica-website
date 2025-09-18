
import { FC } from 'react';
import { Card } from '@/components/common';
import UndefinedHeader from './UndefinedHeader';

const UndefinedPayment: FC = () => {
  return (
    <section className="pt-24 pb-16 sm:pb-20 sm:pt-24 md:pb-24 md:pt-28 lg:pt-42 lg:pb-28 xl:pt-50 xl:pb-32 relative overflow-hidden">
      <div className="sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto relative z-10 grid grid-cols-1 gap-2 sm:gap-6 md:gap-8">
        <UndefinedHeader />
      </div>
    </section>
  );
};

export default UndefinedPayment;
