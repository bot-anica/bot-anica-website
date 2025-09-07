import { FC, memo } from 'react';
import Image from 'next/image';

import { BackgroundImagePositions, BGImages } from '../../../types/sections';

interface BackgroundImageDefaultProps {
  position: BackgroundImagePositions
  images: BGImages
  lazy?: boolean
}

const positionStyles: Record<BackgroundImagePositions, string> = {
    topLeft: "top-0 left-0",
    top: "top-0 left-1/2 transform -translate-x-1/2",
    topRight: "top-0 right-0",
    left: "top-1/2 left-0 transform -translate-y-1/2",
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    right: "top-1/2 right-0 transform -translate-y-1/2",
    bottomLeft: "bottom-0 left-0",
    bottom: "bottom-0 left-1/2 transform -translate-x-1/2",
    bottomRight: "bottom-0 right-0",
}

const BackgroundImageDefault: FC<BackgroundImageDefaultProps> = ({position, images, lazy}) => {
  const image = images.small || images.smallVertical || images.medium || images.mediumVertical || images.large || images.extraLarge

  if (!image) return null;

  return (
    <div className={`absolute ${positionStyles[position]} w-full h-full`}>
      <Image src={image} alt="" fill style={{ objectFit: 'cover' }} loading={lazy ? "lazy" : "eager"} sizes="100vw" />
    </div>
  );
};

export default memo(BackgroundImageDefault);
