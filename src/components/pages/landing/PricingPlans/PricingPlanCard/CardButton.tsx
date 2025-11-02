"use client";

import { FC } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/common';
import { ButtonVariant, ButtonSize } from '@/types/common';
import { Tariff } from '@/types/sections';

interface CardButtonProps {
  isPopular: boolean;
  plan: Tariff;
}

const CardButton: FC<CardButtonProps> = ({ isPopular, plan }) => {
  const router = useRouter();
  const {courseUrlParam} = useParams();

  const handleBuyButton = () => {
    router.push(`/courses/${courseUrlParam}/prepayment?tariffId=${plan.id}`);
  }

  return (
    <Button
      variant={isPopular ? ButtonVariant.PRIMARY : ButtonVariant.SECONDARY}
      size={ButtonSize.LG}
      className="w-full touch-spacing"
      onClick={handleBuyButton}
      disabled={plan.disabled}
    >
      Начать обучение
    </Button>
  );
};

export default CardButton;