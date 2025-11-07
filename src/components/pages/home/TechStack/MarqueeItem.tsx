import React, { FC } from 'react';

import { TechStackItem } from '@/types/sections';

interface MarqueeItemProps {
  item: TechStackItem;
  index: number;
}

const MarqueeItem: FC<MarqueeItemProps> = ({ index, item }) => {
  return (
    <div key={index} className="flex-shrink-0 bg-brand-pink/5 border border-brand-pink/30 rounded-lg mx-4 md:mx-8 lg:mx-12 w-40 h-40 flex flex-col items-center justify-center gap-3">
      {item.icon}
      <span className='text-sm font-medium text-text-secondary'>{item.name}</span>
    </div>
  );
};

export default MarqueeItem;