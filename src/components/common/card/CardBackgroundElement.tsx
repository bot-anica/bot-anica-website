import { FC } from "react";
import { BGImages, BackgroundImagePositions } from "../../../types/sections";
import BackgroundImageDefault from "../background/BackgroundImageDefault";

interface CardBackgroundElementProps {
  images: BGImages;
  position: BackgroundImagePositions;
  lazy?: boolean;
}

const CardBackgroundElement: FC<CardBackgroundElementProps> = ({ images, position, lazy }) => {
  return (
    <BackgroundImageDefault position={position} images={images} lazy={lazy}/>
  );
};

export default CardBackgroundElement;
