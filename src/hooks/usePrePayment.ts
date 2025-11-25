import { useState, useMemo, useCallback } from 'react';
import { Course, Currency, Tariff } from '@/types/sections';
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
    return tariff.prices.map(price => price.currency).sort((a, b) => b.order - a.order);
  }, [tariff]);

  const selectedCurrencyForOrderDetails = useMemo(() => {
    const currencyCodeToDisplay = formSelectedCurrencyCode || availableCurrencies[0]?.code || '';
    return availableCurrencies.find(c => c.code === currencyCodeToDisplay) || null;
  }, [availableCurrencies, formSelectedCurrencyCode]);

  const handleSubmit = async (values: PaymentFormValues) => {
    setIsLoading(true);
    setApiError(null);

    if (tariff.disabled) {
      setApiError('Этот тариф недоступен для покупки.');
      setIsLoading(false);
      return;
    }
    
    try {
      const priceInfo = tariff.prices.find(p => p.currency.code === values.selectedCurrencyCode);
      if (!priceInfo) {
        throw new Error("Информация о цене для выбранной валюты не найдена.");
      }

      if (!values.paymentMethodId) {
        throw new Error("Пожалуйста, выберите метод оплаты.");
      }
      
      const paymentUrl = await InvoiceService.createInvoice({
        courseId: course.id,
        courseUrlParam: course.urlParam,
        tariffId: tariff.id,
        currencyCode: values.selectedCurrencyCode,
        email: values.email,
        name: values.name || undefined,
        paymentMethodId: values.paymentMethodId,
      });
      localStorage.setItem('userEmail', values.email);
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