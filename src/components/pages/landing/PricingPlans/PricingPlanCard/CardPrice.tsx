import { FC } from 'react';

import { TariffPrice } from '@/types/sections';

interface CardPriceProps {
  price: TariffPrice;
  className?: string;
}

const CardPrice: FC<CardPriceProps> = ({ price, className }) => {
  const priceNumber = +price.price;
  const discountPriceNumber = price.discount_price ? +price.discount_price : null;
  const currencySymbol = price.currency.symbol;
  const shortName = price.currency.shortName;
  const currencyCode = price.currency.code;

  return (
    <div className={className}>
      {price.discount_price && (
        <span className="text-text-tertiary line-through font-light text-base sm:text-2xl mr-2">
          {currencySymbol}{priceNumber}
        </span>
      )}
      <span className="text-4xl sm:text-5xl font-bold text-brand-pink">
        {(priceNumber && !shortName) ? <span className="text-brand-pink/50">{currencySymbol}</span> : ""}
        {priceNumber ? (discountPriceNumber || priceNumber) : 'FREE'}
        {(priceNumber && (shortName || !currencySymbol)) ? <span className="text-brand-pink/50"> {shortName || currencyCode}</span> : ""}
      </span>
    </div>
  );
};

export default CardPrice;