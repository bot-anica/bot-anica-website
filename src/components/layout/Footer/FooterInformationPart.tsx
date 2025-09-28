import { FC } from "react";

interface FooterInformationPartProps {
  text: string;
}

const FooterInformationPart: FC<FooterInformationPartProps> = ({ text }) => {
  return (
    <p className="text-text-secondary md:mb-4 max-w-sm lg:max-w-md text-sm lg:text-base">
      {text}
    </p>
  );
};

export default FooterInformationPart;
