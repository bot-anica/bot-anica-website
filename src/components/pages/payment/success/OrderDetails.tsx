import { FC } from 'react';

import { PaymentLog } from '@/hooks/usePaymentLogs';
import FeatureList from '@/components/common/FeatureList';
import { TariffPrice } from '@/types/sections';

interface OrderDetailsProps {
  paymentLog: PaymentLog | null;
}

const OrderDetails: FC<OrderDetailsProps> = ({ paymentLog }) => {
  const { course, tariff, orderId } = paymentLog || {};

  const currencyCode = paymentLog?.currency || 'USD';
  const priceInfo = tariff?.prices.find((p: TariffPrice) => p.currency.code === currencyCode);
  
  const price = priceInfo?.discount_price || priceInfo?.price || '0.00';
  const currencySymbol = priceInfo?.currency.symbol || '$';

  return (
    <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto p-8 sm:py-8 relative z-10 bg-bg-primary sm:rounded-lg sm:border sm:border-brand-blue-light/15">
      <div className='flex flex-col md:flex-row gap-1 md:gap-4 items-center md:items-end mb-4 md:mb-6'>
        <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-text-primary'>Детали заказа</h3>
        <p className='text-sm md:text-base lg:text-xl font-medium text-text-tertiary'>#{orderId}</p>
      </div>
      {paymentLog ? (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-start'>
          <div>
            <h2 className="text-base lg:text-lg font-semibold md:font-bold text-text-primary mb-2">{course?.name}</h2>
            <span className="inline-block bg-brand-pink text-text-opposite text-sm md:text-base font-medium px-2.5 py-0.5 rounded-full mb-4 md:mb-5 lg:mb-6">
              {tariff?.name}
            </span>
            <div className="my-2">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-pink">
                {+price ? <span className="text-brand-pink/50">{currencySymbol}</span> : null}
                {+price ? price : 'FREE'}
              </span>
            </div>
          </div>
          <div className='md:mb-2 lg:mb-4'>
            {tariff && <FeatureList features={tariff.features} />}
          </div>
        </div>
      ) : (
        <div className="text-center text-text-secondary">
          <p>Не удалось загрузить детали вашего заказа.</p>
          <p className="text-sm text-text-secondary mt-2">Возможно, данные вашего браузера были очищены, либо вы еще не совершали успешных оплат.</p>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;