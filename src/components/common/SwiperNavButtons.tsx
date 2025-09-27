'use client';

import type { FC } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface SwiperNavButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

const SwiperNavButtons: FC<SwiperNavButtonsProps> = ({ 
  onPrev, 
  onNext, 
  className 
}) => {
  const buttonClasses = 'cursor-pointer w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 group bg-bg-primary border border-brand-blue/30 text-text-secondary hover:text-brand-pink';

  return (
    <div className={cn('flex gap-3 md:gap-4', className)}>
      <button onClick={onPrev} className={cn(buttonClasses)}>
        <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>
      <button onClick={onNext} className={cn(buttonClasses)}>
        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
