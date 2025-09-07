"use client";

import { FC, useState, useMemo, useCallback } from 'react';

import { InvoiceService } from '@/services/InvoiceService';
import { Course, Tariff, Currency } from '@/types/sections';

import OrderDetails from './OrderDetails';
import PaymentForm, { PaymentFormValues } from './PaymentForm';
import VerticalSplitter from './VerticalSplitter';
import SecurityMessage from './SecurityMessage';

interface PrePaymentClientPageProps {
  course: Course;
  tariff: Tariff;
}

const PrePaymentClientPage: FC<PrePaymentClientPageProps> = ({ course, tariff }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [formSelectedCurrencyCode, setFormSelectedCurrencyCode] = useState<string>('');

  const handleCurrencyCodeChange = useCallback((currencyCode: string) => {
    setFormSelectedCurrencyCode(currencyCode);
  }, []);

  const availableCurrencies = useMemo((): Currency[] => {
    return tariff.prices.map(price => price.currency);
  }, [tariff]);

  const selectedCurrencyForOrderDetails = useMemo(() => {
    const currencyCodeToDisplay = formSelectedCurrencyCode || availableCurrencies[0]?.code || '';
    return availableCurrencies.find(c => c.code === currencyCodeToDisplay) || null;
  }, [availableCurrencies, formSelectedCurrencyCode]);

  const handleSubmit = async (values: PaymentFormValues) => {
    setIsLoading(true);
    setApiError(null);
    
    try {
      const priceInfo = tariff.prices.find(p => p.currency.code === values.selectedCurrencyCode);
      if (!priceInfo) {
        throw new Error("Информация о цене для выбранной валюты не найдена.");
      }

      const paymentUrl = await InvoiceService.createInvoice({
        courseId: course.id,
        tariffId: tariff.id,
        currencyCode: values.selectedCurrencyCode,
        amount: +(priceInfo.discount_price || priceInfo.price),
        email: values.email,
        name: values.name || undefined,
      });
      window.location.href = paymentUrl;
    } catch (err) {
      console.error('Failed to create invoice:', err);
      setApiError(err instanceof Error ? err.message : 'Не удалось создать счет. Попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pb-24 pt-38 lg:pt-42 xl:pt-50 lg:pb-28 xl:pb-32 relative overflow-hidden bg-gradient-to-br from-primary-pink/15 to-primary-blue/5">
      <div className="max-w-5xl h-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-white p-8 rounded-lg border border-primary-blue/15 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8">
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