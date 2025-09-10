import { useState, useMemo, useCallback } from 'react';
import { Course, Tariff, Currency } from '@/types/sections';
import { InvoiceService } from '@/services/InvoiceService';
import { PaymentFormValues } from '@/components/pages/prePayment/PaymentForm';

export const usePrePayment = (course: Course, tariff: Tariff) => {
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
        courseUrlParam: course.urlParam,
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

  return {
    isLoading,
    apiError,
    availableCurrencies,
    selectedCurrencyForOrderDetails,
    handleCurrencyCodeChange,
    handleSubmit,
  };
};