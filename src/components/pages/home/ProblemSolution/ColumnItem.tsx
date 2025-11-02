import React from 'react';
import Icon from '@/components/ui/Icon';
import { motion } from 'framer-motion';

const problemColorConfig = {
  bg: 'bg-brand-blue/5',
  border: 'border-brand-blue-light/30',
  iconBg: 'bg-brand-blue-light/25',
  iconText: 'text-brand-blue-light',
};

const solutionColorConfig = {
  bg: 'bg-brand-pink/5',
  border: 'border-brand-pink/30',
  iconBg: 'bg-brand-pink/25',
  iconText: 'text-brand-pink',
};

const colorConfigs = {
  problem: problemColorConfig,
  solution: solutionColorConfig,
};

interface ColumnItemProps {
  index: number;
  item: {
    icon: string;
    title: string;
    description: string;
  };
  isIntersecting: boolean;
  type?: 'problem' | 'solution';
}

const ColumnItem: React.FC<ColumnItemProps> = ({ index, item, isIntersecting, type = 'solution' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6 + index * 0.3, duration: 0.6, ease: 'easeInOut' }}
      className={`w-full ${colorConfigs[type].bg} border ${colorConfigs[type].border} rounded-xl p-6 space-x-4`}>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          <div className={`w-10 h-10 flex justify-center items-center rounded ${colorConfigs[type].iconBg}`}>
            <Icon name={item.icon} className={`${colorConfigs[type].iconText} flex-shrink-0`} size={20} />
          </div>
          <h3 className="font-semibold text-lg">{item.title}</h3>
        </div>
        <div>
          <p className="text-text-secondary text-sm">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ColumnItem;
