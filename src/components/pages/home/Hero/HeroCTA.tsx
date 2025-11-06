import { FC } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/common';
import { ButtonIconPosition, ButtonVariant } from '@/types/common';
import { CTAItem } from '@/types/sections';
import Icon from '@/components/ui/Icon';

interface HeroCTAProps {
  cta: Record<"primary" | "secondary", CTAItem>;
  variants: any;
}

const HeroCTA: FC<HeroCTAProps> = ({ cta, variants }) => {
  return (
    <motion.div 
      variants={variants}
      className="mt-8 flex justify-center md:justify-start gap-4"
    >
      {Object.entries(cta).map(([key, item]) => (
        <Button
          key={key}
          variant={key === 'primary' ? ButtonVariant.PRIMARY : ButtonVariant.SECONDARY}
          size={item.buttonSize}
          to={item.link}
        >
          {item.buttonIconPosition === ButtonIconPosition.LEFT && <Icon name={item.buttonIcon} className={`mr-2 ${item.buttonIconColor}`} />}
          {item.text}
          {item.buttonIconPosition === ButtonIconPosition.RIGHT && <Icon name={item.buttonIcon} className={`ml-2 ${item.buttonIconColor}`} />}
        </Button>
      ))}
    </motion.div>
  );
};

export default HeroCTA;
