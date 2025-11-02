import { FC } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/common';
import { ButtonSize, ButtonVariant } from '@/types/common';

interface HeroCTAProps {
  variants: any;
}

const HeroCTA: FC<HeroCTAProps> = ({ variants }) => {
  return (
    <motion.div 
      variants={variants}
      className="mt-8 flex justify-center md:justify-start gap-4"
    >
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LG} to="#courses">
        Выбрать курс
      </Button>
      <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.LG} to="#courses">
        Смотреть программу
      </Button>
    </motion.div>
  );
};

export default HeroCTA;
