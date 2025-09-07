import { FC } from "react";
import { HeroImages } from "../../../../types/sections";
import ImageInTextDefault from "./ImageInText/ImageInTextDefault";

interface HeroImageInTextProps {
  images: HeroImages;
}

const HeroImageInText: FC<HeroImageInTextProps> = ({ images }) => {
  const maxSize = Object.keys(images).filter((key) => images[key as keyof HeroImages])[0]

  return (
    <ImageInTextDefault images={images} maxSize={maxSize as keyof HeroImages} />
  );
};

export default HeroImageInText;
