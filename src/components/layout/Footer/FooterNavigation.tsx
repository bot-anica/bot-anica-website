import { FC } from "react";
import Link from "next/link";

import { LinkItem } from "../../../types/sections";

interface FooterNavigationProps {
  links: LinkItem[];
}

const FooterNavigation: FC<FooterNavigationProps> = ({ links }) => {
  return (
    <nav className="flex flex-row gap-6 mb-4 text-sm lg:text-base underline">
      {links.map((linkItem) => (
        <Link
          key={linkItem.link}
          href={linkItem.link}
          className="text-text-opposite-light hover:text-text-opposite transition-colors duration-200"
        >
          {linkItem.text}
        </Link>
      ))}
    </nav>
  );
};

export default FooterNavigation;
