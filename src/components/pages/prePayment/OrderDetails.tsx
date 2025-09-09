import { FC } from 'react';
import { Check } from 'lucide-react';

import { Course, Tariff, Currency, TariffPrice } from '@/types/sections';
import CardPrice from '../landing/PricingPlans/PricingPlanCard/CardPrice';

interface OrderDetailsProps {
  course: Course;
  tariff: Tariff;
  selectedCurrency: Currency | null;
}

const OrderDetails: FC<OrderDetailsProps> = ({ course, tariff, selectedCurrency }) => {
  const price = tariff.prices.find(p => p.currency.code === selectedCurrency?.code);

  return (
    <div className="flex-1">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-dark mb-4 md:mb-5 lg:mb-6">Детали заказа</h2>
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold md:font-bold text-primary-dark sm:mb-1 md:mb-2">{course.name}</h3>
      <span className="inline-block bg-primary-pink text-white text-xs sm:text-sm md:text-base font-medium px-2.5 py-0.5 rounded-full mb-4 md:mb-5 lg:mb-6">
        {tariff.name}
      </span>
      <h4 className="text-sm md:text-base lg:text-lg font-semibold text-primary-dark mb-2 md:mb-3 lg:mb-4">Что включено:</h4>
      <ul className="space-y-1 md:space-y-2 lg:space-y-3 mb-4 md:mb-6 lg:mb-8">
        {tariff.features.split('\n').map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700 text-sm md:text-base">
            <Check className="w-4 sm:h-4 md:w-5 md:h-5 text-primary-pink mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center border-t border-primary-blue/15 pt-4 md:pt-5 lg:pt-6">
        <div>
          <h4 className="text-base lg:text-lg font-bold text-primary-dark">Итого:</h4>
          <p className="text-xs md:text-sm text-gray-600">{tariff.description}</p>
        </div>
        {price && <CardPrice price={price as TariffPrice} />}
      </div>
    </div>
  );
};

export default OrderDetails;
