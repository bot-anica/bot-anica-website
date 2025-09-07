import type { FC } from "react";
import { LinkItem } from "../../../types/sections";
import Link from "next/link";

interface HeaderNavigationProps {
  links: LinkItem[];
}

const HeaderNavigation: FC<HeaderNavigationProps> = ({ links }) => {
  return (
    <nav className="hidden md:flex space-x-8 items-center h-full">
      {links.map((linkItem) => (
        <Link
          key={linkItem.link}
          href={linkItem.link}
          className="text-sm lg:text-base text-gray-700 hover:text-primary-pink transition-colors font-medium flex items-center h-full py-2"
        >
          {linkItem.text}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNavigation;
