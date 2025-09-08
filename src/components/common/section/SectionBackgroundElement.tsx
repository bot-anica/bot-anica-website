import { FC } from "react";

import BackgroundImageDefault from "../background/BackgroundImageDefault";
import BackgroundImageSources from "../background/BackgroundImageSources";
import { BGImages, BackgroundImagePositions } from "@/types/sections";

interface SectionBackgroundElementProps {
  images: BGImages;
  position: BackgroundImagePositions;
  lazy?: boolean;
}

const SectionBackgroundElement: FC<SectionBackgroundElementProps> = ({ images, position, lazy }) => {
  return (
    <picture>
      <BackgroundImageSources images={images}/>
      <BackgroundImageDefault position={position} images={images} lazy={lazy}/>
    </picture>
  );
};

export default SectionBackgroundElement;
