import { Suspense } from 'react';

import FooterLogoLink from "./FooterLogoLink";
import FooterInformationPart from "./FooterInformationPart";
import FooterNavigation from "./FooterNavigation";
import FooterContacts from "./FooterContacts";
import FooterCopyright from "./FooterCopyright";
import { FooterService } from "@/services/FooterService";

export default async function Footer() {
  const { description, courseLinks, navigationLinks } = await FooterService.getData();

  return (
    <footer className="bg-brand-pink/15 text-text-secondary pt-8 pb-4 md:pt-10 md:pb-6 lg:pt-14 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0 mb-6">
            <div className="self-stretch md:w-auto flex flex-col items-center md:items-start gap-6 text-center md:text-left">
              <FooterLogoLink />
              {description && <FooterInformationPart text={description} />}
              <div className="hidden md:block">
                <FooterContacts />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:items-start h-full md:min-h-[120px] w-full md:w-auto text-center md:text-right">
              {navigationLinks && <FooterNavigation links={navigationLinks} />}
              {courseLinks && <FooterNavigation links={courseLinks} title="Курсы" />}
            </div>

            <div className="flex md:hidden justify-center mt-2">
              <FooterContacts />
            </div>

            {/* <div></div> */}
          </div>

          <FooterCopyright />
        </Suspense>
      </div>
    </footer>
  );
};