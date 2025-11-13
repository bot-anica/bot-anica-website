import { FC } from "react";
import Link from "next/link";

import { LinkItem } from "../../../types/sections";

interface FooterNavigationProps {
  links: LinkItem[];
  title?: string;
}

const FooterNavigation: FC<FooterNavigationProps> = ({ links, title }) => {
  return (
    <div>
      {title && <h3 className="text-sm md:text-base text-center md:text-left text-text-secondary mb-2">{title}</h3>}
      <nav className="flex flex-col items-center md:items-start gap-3 text-sm lg:text-base underline">
        {links.map((linkItem) => (
          <Link
            key={linkItem.link}
            href={linkItem.link}
            className="font-medium text-left text-text-primary hover:text-text-primary transition-colors duration-200"
          >
            {linkItem.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default FooterNavigation;
