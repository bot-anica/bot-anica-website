import { useState } from 'react';
import { Course, Tariff } from '@/types/sections';
import { InvoiceService } from '@/services/InvoiceService';
import { GetFreeTariffFormValues } from '@/components/pages/prePayment/GetFreeTariffForm';

export const useGetFreeTariff = (course: Course, tariff: Tariff) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = async (values: GetFreeTariffFormValues) => {
    setIsLoading(true);
    setApiError(null);
    
    try {
      const priceInfo = tariff.prices[0];
      if (!priceInfo) {
        throw new Error("Отсутствуют данные о ценах тарифа.");
      }

      const paymentUrl = await InvoiceService.createInvoice({
        courseId: course.id,
        courseUrlParam: course.urlParam,
        tariffId: tariff.id,
        currencyCode: priceInfo.currency.code,
        email: values.email,
        name: values.name || undefined,
      });
      localStorage.setItem('userEmail', values.email);
      window.location.href = paymentUrl;
    } catch (err) {
      console.error('Failed to create invoice:', err);
      setApiError(err instanceof Error ? err.message : 'Не удалось оформить заказ. Пожалуйста, попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    apiError,
    handleSubmit,
  };
};