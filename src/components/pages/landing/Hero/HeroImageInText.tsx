import { FC } from "react";

import ImageInTextDefault from "./ImageInText/ImageInTextDefault";
import ImageInTextSources from "./ImageInText/ImageInTextSources";
import { HeroImages } from "@/types/sections";

interface HeroImageInTextProps {
  images: HeroImages;
}

const HeroImageInText: FC<HeroImageInTextProps> = ({ images }) => {
  const maxSize = Object.keys(images).filter((key) => images[key as keyof HeroImages])[0]

  return (
    <picture>
      <ImageInTextSources images={images}/>
      <ImageInTextDefault images={images} maxSize={maxSize as keyof HeroImages} />
    </picture>
  );
};

export default HeroImageInText;
