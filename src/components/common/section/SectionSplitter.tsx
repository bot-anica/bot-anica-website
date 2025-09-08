"use client";

import Image from "next/image";
import { useImageDimensions } from "@/hooks/useImageDimensions";

export interface SectionSplitterProps {
  top?: boolean;
  bottom?: boolean;
}

const SectionSplitter: React.FC<SectionSplitterProps> = ({top = true, bottom = true}) => {
  const dimensions = useImageDimensions("/images/line_stroke.png");

  return (
    <>
      {top && dimensions && <Image src="/images/line_stroke.png" alt="" className="absolute -top-[5px] left-1/2 -translate-x-1/2 opacity-50" width={dimensions.width} height={dimensions.height} />}
      {bottom && dimensions && <Image src="/images/line_stroke.png" alt="" className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 opacity-50" width={dimensions.width} height={dimensions.height} />}
    </>
  )
}

export default SectionSplitter