import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroImageProps {
  variants: any;
}

const HeroImage: FC<HeroImageProps> = ({ variants }) => {
  return (
    <motion.div 
      variants={variants}
      className="flex justify-center items-center"
    >
      <Image src="/images/home/hero/HeroImg.png" alt="" width={1200} height={600} />
    </motion.div>
  );
};

export default HeroImage;
