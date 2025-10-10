import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

import PaymentMethods from './PaymentMethods';
import PaymentMethodsSkeleton from './PaymentMethodsSkeleton';

import { Currency } from '@/types/sections';
import SecurityMessage from '../../prePayment/SecurityMessage';

interface PricingPlansPaymentProps {
  availableCurrencies: Currency[];
  isIntersecting: boolean;
  selectedCurrency: Currency | null;
  onCurrencyChange: (currency: Currency) => void;
  loading: boolean;
  courseIsFree?: boolean;
}

const PricingPlansPayment: React.FC<PricingPlansPaymentProps> = ({ 
  availableCurrencies, 
  isIntersecting,
  selectedCurrency,
  onCurrencyChange,
  loading,
  courseIsFree
}) => {
  return (
    <>
      {/* Payment Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-sm md:text-base text-center mb-8 lg:mb-12 flex flex-col items-center gap-3 md:gap-4"
      >
        {!courseIsFree && (
          <p className="text-text-secondary">
            Цены указаны в долларах США. Для оплаты можете использовать
          </p>
        )}
        
        {loading ? (
          <PaymentMethodsSkeleton />
        ) : !courseIsFree && (
          <PaymentMethods 
            currencies={availableCurrencies} 
            selectedCurrency={selectedCurrency}
            onCurrencyChange={onCurrencyChange}
          />
        )}
      </motion.div>

      {/* Quality Guarantee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto"
      >
        <SecurityMessage />
      </motion.div>
    </>
  );
};

export default PricingPlansPayment;