import { FC } from 'react';
import { TariffPrice } from '../../../../../types/sections';

interface CardPriceProps {
  price: TariffPrice;
}

const CardPrice: FC<CardPriceProps> = ({ price }) => {
  return (
    <div className="mb-2 text-center">
      {price.discount_price && (
        <span className="text-text-tertiary line-through font-light text-base sm:text-2xl mr-2">
          {price.currency.symbol}{+price.price}
        </span>
      )}
      <span className="text-4xl sm:text-5xl font-bold text-brand-pink">
        <span className="text-brand-pink/50">{price.currency.symbol}</span>{price.discount_price ? +price.discount_price : +price.price}
      </span>
    </div>
  );
};

export default CardPrice;