import { FC } from 'react';

import { PaymentLog } from '@/hooks/usePaymentSuccess';
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
    <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl h-full mx-auto p-8 sm:py-8 relative z-10 bg-white sm:rounded-lg sm:border sm:border-primary-blue/15">
      <div className='flex gap-4 items-center mb-4 md:mb-6'>
        <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-gray-900'>Детали заказа</h3>
        <p className='text-base md:text-lg lg:text-xl font-medium text-slate-400'>#{orderId}</p>
      </div>
      {paymentLog ? (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-start'>
          <div>
            <h2 className="text-base md:text-lg lg:text-xl font-bold text-primary-dark mb-2">{course?.name}</h2>
            <span className="inline-block bg-primary-pink text-white text-xs sm:text-sm md:text-base font-medium px-2.5 py-0.5 rounded-full mb-4 md:mb-5 lg:mb-6">
              {tariff?.name}
            </span>
            <div className="my-2">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-pink">
                <span className="text-primary-pink/50">{currencySymbol}</span>{price}
              </span>
            </div>
          </div>
          <div className='md:mb-2 lg:mb-4'>
            {tariff && <FeatureList features={tariff.features} />}
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600">
          <p>Не удалось загрузить детали вашего заказа.</p>
          <p className="text-sm text-gray-500 mt-2">Возможно, данные вашего браузера были очищены, либо вы еще не совершали успешных оплат.</p>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;