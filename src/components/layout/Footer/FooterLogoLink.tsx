import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const FooterLogoLink: FC = () => {
  return (
    <Link href="/" className="h-full mb-6">
      <Image src="/images/Logo_with_bg.svg" alt="Logo" className="h-8 w-auto" width={200} height={40} />
    </Link>
  );
};

export default FooterLogoLink;
