import type { FC } from 'react';
import { memo } from 'react';

import { Button } from '@/components/common';
import { ButtonVariant } from '@/types/common';
import { WhySpecialPoint } from '@/types/sections';
import Icon from '@/components/ui/Icon';

interface WhySpecialPointItemProps {
  point: WhySpecialPoint;
  isActive: boolean;
  onClick: () => void;
}

const WhySpecialPointItem: FC<WhySpecialPointItemProps> = ({ point, isActive, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant={ButtonVariant.GHOST}
      className={`w-full lg:justify-start cursor-pointer bg-bg-primary !px-0 lg:!px-6 py-2 lg:p-4 rounded-tl-xl rounded-tr-xl rounded-bl-none rounded-br-none lg:rounded-xl border border-b-bg-primary lg:border-l-4 transition-all duration-300 ${
        isActive
          ? 'border-border-primary lg:border-border-primary'
          : 'border-bg-primary hover:border-border-primary lg:border-bg-primary lg:hover:border-border-primary'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" name={point.icon} style={{ color: point.color }} />
        </div>
        <div className="hidden lg:block">
          <h3 className={`font-semibold text-lg ${
            isActive 
              ? 'text-text-primary' 
              : 'text-text-secondary'
          }`}>
            {point.title}
          </h3>
          {/* <p className="text-sm text-gray-500 line-clamp-1">
            {point.description}
          </p> */}
        </div>
      </div>
    </Button>
  );
};

export default memo(WhySpecialPointItem);
