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
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-4 md:mb-5 lg:mb-6">Детали заказа</h2>
      <h3 className="text-base lg:text-lg font-semibold md:font-bold text-text-primary mb-1 md:mb-2">{course.name}</h3>
      <span className="inline-block bg-brand-pink text-text-opposite text-sm md:text-base font-medium px-2.5 py-0.5 rounded-full mb-4 md:mb-5 lg:mb-6">
        {tariff.name}
      </span>
      <h4 className="text-base lg:text-lg font-semibold text-text-primary mb-2 md:mb-3 lg:mb-4">Что включено:</h4>
      <ul className="space-y-2 lg:space-y-3 mb-4 md:mb-6 lg:mb-8">
        {tariff.features.split('\n').map((feature, index) => (
          <li key={index} className="flex items-center text-text-secondary text-sm md:text-base">
            <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-pink mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center gap-4 border-t border-brand-blue-light/15 pt-4 md:pt-5 lg:pt-6">
        <div>
          <h4 className="text-base lg:text-lg font-bold text-text-primary">Итого:</h4>
          {price && <CardPrice price={price as TariffPrice} />}
          <p className="shrink-0 text-xs md:text-sm text-text-secondary">{tariff.description}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
