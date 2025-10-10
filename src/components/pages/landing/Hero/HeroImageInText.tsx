import { FC } from "react";
import { motion } from 'framer-motion';

import ImageInTextDefault from "./ImageInText/ImageInTextDefault";
import ImageInTextSources from "./ImageInText/ImageInTextSources";
import { HeroImages } from "@/types/sections";

interface HeroImageInTextProps {
  images: HeroImages;
  itemVariants?: any;
}

const HeroImageInText: FC<HeroImageInTextProps> = ({ images, itemVariants }) => {
  const maxSize = Object.keys(images).filter((key) => images[key as keyof HeroImages])[0]

  return (
    <motion.picture variants={itemVariants}>
      <ImageInTextSources images={images}/>
      <ImageInTextDefault images={images} maxSize={maxSize as keyof HeroImages} />
    </motion.picture>
  );
};

export default HeroImageInText;
