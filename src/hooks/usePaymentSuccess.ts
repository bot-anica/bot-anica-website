
import { useState, useEffect } from 'react';
import { Course, Tariff } from '@/types/sections';

export interface PaymentLog {
  id: number;
  orderId: string;
  course: Course;
  tariff: Tariff;
  email: string;
  status: 'success' | 'fail';
  createdAt: Date;
  currency?: string;
}

export const usePaymentSuccess = () => {
  const [paymentLog, setPaymentLog] = useState<PaymentLog | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentLog = async () => {
      const userEmail = localStorage.getItem('userEmail');
      if (!userEmail) {
        setError('Email не найден. Пожалуйста, попробуйте снова.');
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/get-payment-log?email=${userEmail}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Не удалось загрузить детали платежа.');
        }
        const data = await response.json();
        setPaymentLog(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Произошла ошибка.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaymentLog();
  }, []);

  return { paymentLog, isLoading, error };
};
