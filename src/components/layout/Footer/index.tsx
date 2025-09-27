"use client";
import type { FC } from "react";

import { useFooter } from "../../../hooks/useFooter";
import FooterLogoLink from "./FooterLogoLink";
import FooterInformationPart from "./FooterInformationPart";
import FooterNavigation from "./FooterNavigation";
import FooterContacts from "./FooterContacts";
import FooterCopyright from "./FooterCopyright";

const Footer: FC = () => {
  const footerData = useFooter();



  const courseDescription = footerData?.courseDescription;
  const navigationLinks = footerData?.navigationLinks || [];

  return (
    <footer className="bg-bg-opposite text-text-opposite pt-8 pb-4 md:pt-10 md:pb-6 lg:pt-14 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0 mb-4">
          <div className="md:w-auto flex flex-col items-center md:items-start text-center md:text-left">
            <FooterLogoLink />
            {courseDescription && <FooterInformationPart text={courseDescription} />}
          </div>

          <div className="flex flex-col items-center md:items-end h-full md:min-h-[120px] w-full md:w-auto text-center md:text-right">
            {navigationLinks && <FooterNavigation links={navigationLinks} />}
            <div className="flex-grow" />
            <FooterContacts />
          </div>
        </div>

        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;