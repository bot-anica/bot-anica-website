'use client';

import type { FC } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface SwiperNavButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  theme?: 'light' | 'dark';
  className?: string;
}

const SwiperNavButtons: FC<SwiperNavButtonsProps> = ({ 
  onPrev, 
  onNext, 
  theme = 'light', 
  className 
}) => {
  const baseClasses = 'cursor-pointer w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 group';

  const themeClasses = {
    light: 'bg-white border border-primary-blue/30 text-gray-600 hover:text-primary-pink',
    dark: 'bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-yellow-400',
  };

  return (
    <div className={cn('flex gap-3 md:gap-4', className)}>
      <button onClick={onPrev} className={cn(baseClasses, themeClasses[theme])}>
        <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>
      <button onClick={onNext} className={cn(baseClasses, themeClasses[theme])}>
        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
