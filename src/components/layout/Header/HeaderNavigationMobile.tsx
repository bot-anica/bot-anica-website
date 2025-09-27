import type { FC } from "react";
import { LinkItem } from "../../../types/sections";
import Link from "next/link";

interface HeaderNavigationMobileProps {
  links: LinkItem[];
  onClose: () => void;
}

const HeaderNavigationMobile: FC<HeaderNavigationMobileProps> = ({ links, onClose }) => {
  return (
    <nav className="py-2 sm:py-4 space-y-1 sm:space-y-2 border-t border-b border-bg-secondary">
      {links.map((linkItem) => (
        <Link
          key={linkItem.link}
          href={linkItem.link}
          onClick={onClose}
          className="w-full text-left text-text-primary hover:text-brand-pink transition-colors font-medium py-2 px-2 sm:px-4 rounded-lg hover:bg-bg-primary text-sm flex items-center"
        >
          {linkItem.text}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNavigationMobile;
