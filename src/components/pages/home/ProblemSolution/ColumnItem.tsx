import React from 'react';
import Icon from '@/components/ui/Icon';

interface ColumnItemProps {
  item: {
    icon: string;
    title: string;
    description: string;
  };
  colorConfig: {
    bg: string;
    border: string;
    iconBg: string;
    iconText: string;
  };
}

const ColumnItem: React.FC<ColumnItemProps> = ({ item, colorConfig }) => {
  return (
    <div className={`w-full ${colorConfig.bg} border ${colorConfig.border} rounded-xl p-6 space-x-4`}>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          <div className={`w-10 h-10 flex justify-center items-center rounded ${colorConfig.iconBg}`}>
            <Icon name={item.icon} className={`${colorConfig.iconText} flex-shrink-0`} size={20} />
          </div>
          <h3 className="font-semibold text-lg">{item.title}</h3>
        </div>
        <div>
          <p className="text-text-secondary text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ColumnItem;
