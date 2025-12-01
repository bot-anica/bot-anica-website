import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroImageProps {
  image: string;
  variants: any;
}

const HeroImage: FC<HeroImageProps> = ({ image, variants }) => {
  return (
    <motion.div 
      variants={variants}
      className="flex justify-center items-center"
    >
      <Image src={image} alt="Превью результатов курсов" width={1200} height={600} className="w-full h-auto" />
    </motion.div>
  );
};

export default HeroImage;
