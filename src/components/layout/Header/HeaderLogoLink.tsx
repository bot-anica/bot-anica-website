import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderLogoLink: FC = () => {
  return (
    <Link href="/">
      <Image src="/images/Logo_without_bg.svg" alt="Logo" className="h-8 w-auto" width={200} height={40} />
    </Link>
  );
};

export default HeaderLogoLink;