"use client";

import type { FC } from 'react';
import { motion, easeOut } from 'framer-motion';

import { Statistic } from '@/types/sections';
import Icon from '@/components/ui/Icon';

interface SuccessStoriesStatsProps {
  stats: Statistic[];
  isIntersecting: boolean;
}

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: easeOut,
    },
  }),
};

export const SuccessStoriesStats: FC<SuccessStoriesStatsProps> = ({
  stats,
  isIntersecting,
}) => {
  const renderIcon = (iconName: string, color: string) => {
    return <Icon name={iconName} className="w-10 h-10" style={{ color: color }} />
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={statVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="text-center group"
        >
          <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {renderIcon(stat.icon, stat.iconColor)}
          </div>
          <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
            {stat.number}
          </div>
          <div className="text-text-secondary text-sm md:text-base">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
