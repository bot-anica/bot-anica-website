"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useImageDimensions } from "@/hooks/useImageDimensions";

const HeaderLogoLink: FC = () => {
  const dimensions = useImageDimensions("/images/Logo_without_bg.svg");

  return (
    <Link href="/">
      {dimensions && <Image src="/images/Logo_without_bg.svg" alt="Logo" className="h-8 w-auto" width={dimensions.width} height={dimensions.height} />}
    </Link>
  );
};

export default HeaderLogoLink;
