import { FC } from 'react';
import { TariffPrice } from '../../../../../types/sections';

interface CardPriceProps {
  price: TariffPrice;
}

const CardPrice: FC<CardPriceProps> = ({ price }) => {
  const priceNumber = +price.price;
  const discountPriceNumber = price.discount_price ? +price.discount_price : null;
  const priceCurrencySymbol = price.currency.symbol;

  return (
    <div className="mb-2 text-center">
      {price.discount_price && (
        <span className="text-text-tertiary line-through font-light text-base sm:text-2xl mr-2">
          {priceCurrencySymbol}{priceNumber}
        </span>
      )}
      <span className="text-4xl sm:text-5xl font-bold text-brand-pink">
        {priceNumber ? <span className="text-brand-pink/50">{priceCurrencySymbol}</span> : ""}
        {priceNumber ? (discountPriceNumber || priceNumber) : 'FREE'}
        {(priceNumber && !priceCurrencySymbol) ? ` ${price.currency.code}` : ""}
      </span>
    </div>
  );
};

export default CardPrice;