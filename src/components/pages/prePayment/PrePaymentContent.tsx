"use client";

import { FC } from 'react';

import { Course, Tariff } from '@/types/sections';
import { usePrePayment } from '@/hooks/usePrePayment';

import OrderDetails from './OrderDetails';
import PaymentForm from './PaymentForm';
import VerticalSplitter from './VerticalSplitter';
import SecurityMessage from './SecurityMessage';
import GetFreeTariffForm from './GetFreeTariffForm';
import { useGetFreeTariff } from '@/hooks/useGetFreeTariff';

interface PrePaymentClientPageProps {
  course: Course;
  tariff: Tariff;
  isTariffFree: boolean;
}

const PrePaymentContent: FC<PrePaymentClientPageProps> = ({ course, tariff, isTariffFree }) => {
  const {
    isLoading: isPrePaymentLoading,
    apiError: prePaymentApiError,
    availableCurrencies,
    selectedCurrencyForOrderDetails,
    handleCurrencyCodeChange,
    handleSubmit: handlePrePaymentSubmit,
  } = usePrePayment(course, tariff);

  const {
    isLoading,
    apiError,
    handleSubmit,
  } = useGetFreeTariff(course, tariff);

  return (
    <>
      <OrderDetails course={course} tariff={tariff} selectedCurrency={selectedCurrencyForOrderDetails} />
      <VerticalSplitter />
      <div>
        {isTariffFree ? (
          <GetFreeTariffForm
            onSubmit={handleSubmit}
            isLoading={isLoading}
            apiError={apiError}
          />
        ) : (
          <PaymentForm
            availableCurrencies={availableCurrencies!}
            onSubmit={handlePrePaymentSubmit}
            isLoading={isPrePaymentLoading}
            apiError={prePaymentApiError}
            onCurrencyCodeChange={handleCurrencyCodeChange}
            disabled={tariff.disabled}
          />
        )}
        <SecurityMessage />
      </div>
    </>
  );
};

export default PrePaymentContent;