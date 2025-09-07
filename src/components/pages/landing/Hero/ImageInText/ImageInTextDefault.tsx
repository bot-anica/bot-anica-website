import type { FC } from 'react';
import { memo } from 'react';
import { HeroImages } from '../../../../../types/sections';
import Image from 'next/image';

interface ImageInTextDefaultProps {
  images: HeroImages,
  maxSize: 'smallVertical' | 'small' | 'mediumVertical' | 'medium' | 'large' | 'extraLarge'
}

const mediaStyles = {
  'extraLarge': "",
  'large': "xl:hidden",
  'medium': "lg:hidden",
  'mediumVertical': "md:hidden",
  'small': "md:hidden",
  'smallVertical': "sm:hidden",
}

const ImageInTextDefault: FC<ImageInTextDefaultProps> = ({images, maxSize}) => {
  const defaultImage = images[maxSize]

  return (
    <Image 
      src={defaultImage!} 
      alt="Course illustration" 
      className={`relative z-10 ${mediaStyles[maxSize]}`} 
      loading="lazy"
      decoding="async"
      width={400}
      height={400}
    />
  );
};

export default memo(ImageInTextDefault);