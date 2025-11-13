"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useImageDimensions } from "@/hooks/useImageDimensions";

const FooterLogoLink: FC = () => {
  const dimensions = useImageDimensions("/images/Logo_with_bg.svg");

  return (
    <Link href="/" className="cursor-pointer">
      {dimensions && <Image src="/images/Logo_with_bg.svg" alt="Logo" className="h-8 w-auto" width={dimensions.width} height={dimensions.height} />}
    </Link>
  );
};

export default FooterLogoLink;