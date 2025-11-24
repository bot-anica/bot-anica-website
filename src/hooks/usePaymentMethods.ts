import { useState, useEffect } from 'react';
import { PaymentMethod } from '@/types/payment';
import { PaymentMethodService } from '@/services/PaymentMethodService';

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        setIsLoading(true);
        const fetchedPaymentMethods = await PaymentMethodService.getPaymentMethods();
        setPaymentMethods(fetchedPaymentMethods);
      } catch (err) {
        console.log(err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaymentMethods();
  }, []);

  return { paymentMethods, isLoading, error };
};
