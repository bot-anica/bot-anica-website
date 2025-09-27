"use client";

import { FC } from 'react';

import { Course, Tariff } from '@/types/sections';
import { usePrePayment } from '@/hooks/usePrePayment';

import OrderDetails from './OrderDetails';
import PaymentForm from './PaymentForm';
import VerticalSplitter from './VerticalSplitter';
import SecurityMessage from './SecurityMessage';

interface PrePaymentClientPageProps {
  course: Course;
  tariff: Tariff;
}

const PrePaymentClientPage: FC<PrePaymentClientPageProps> = ({ course, tariff }) => {
  const {
    isLoading,
    apiError,
    availableCurrencies,
    selectedCurrencyForOrderDetails,
    handleCurrencyCodeChange,
    handleSubmit,
  } = usePrePayment(course, tariff);

  return (
    <section className="pt-14 sm:pb-6 sm:pt-20 md:pb-14 md:pt-28 lg:pt-42 xl:pt-50 lg:pb-28 xl:pb-32 relative overflow-hidden bg-gradient-to-br from-brand-pink/15 to-brand-blue/5">
      <div className="sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto pt-8 px-8 pb-16 sm:py-8 relative z-10 bg-bg-primary sm:rounded-lg sm:border sm:border-brand-blue/15 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8">
        <OrderDetails course={course} tariff={tariff} selectedCurrency={selectedCurrencyForOrderDetails} />
        <VerticalSplitter />
        <div>
          <PaymentForm
            availableCurrencies={availableCurrencies}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            apiError={apiError}
            onCurrencyCodeChange={handleCurrencyCodeChange}
          />
          <SecurityMessage />
        </div>
      </div>
    </section>
  );
};

export default PrePaymentClientPage;