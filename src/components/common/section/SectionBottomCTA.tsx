"use client";

import type { FC } from 'react';
import { motion, easeOut } from 'framer-motion';

import Icon from '@/components/ui/Icon';
import { Button } from '@/components/common';
import { ButtonSize, ButtonVariant } from '@/types/common';
import { SectionBottomCTA as SectionBottomCTAType } from '@/types/sections';

interface SuccessStoriesCTAProps {
  data: SectionBottomCTAType;
  isIntersecting: boolean;
}

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const SectionBottomCTA: FC<SuccessStoriesCTAProps> = ({
  data,
  isIntersecting,
}) => {
  const renderIcon = (iconName: string, color: string) => {
    return <Icon name={iconName} className={`w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-${color}`} />
  };

  return (
    <motion.div
      variants={ctaVariants}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      className="text-center bg-gradient-to-r from-brand-pink to-brand-blue rounded-2xl p-5 sm:p-6 md:p-8"
    >
      <div className="mb-2 sm:mb-3 md:mb-4 flex justify-center">
        {renderIcon(data.icon, data.iconColor)}
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
        {data.text}
      </h3>
      <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-2 sm:mb-3 md:mb-4">
        {data.description}
      </p>
      <Button 
        variant={ButtonVariant.OPPOSITE}
        to="#pricing"
        size={ButtonSize.MD}
        withoutBorder
      >
        <span>Начать обучение</span>
      </Button>
    </motion.div>
  );
};

export default SectionBottomCTA;
