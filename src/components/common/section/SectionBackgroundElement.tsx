import { FC } from "react";
import { BackgroundImagePositions, BGImages } from "../../../types/sections";
import BackgroundImageDefault from "../background/BackgroundImageDefault";

interface SectionBackgroundElementProps {
  images: BGImages;
  position: BackgroundImagePositions;
  lazy?: boolean;
}

const SectionBackgroundElement: FC<SectionBackgroundElementProps> = ({ images, position, lazy }) => {
  return (
    <BackgroundImageDefault position={position} images={images} lazy={lazy}/>
  );
};

export default SectionBackgroundElement;
