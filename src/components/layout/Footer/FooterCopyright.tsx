import Icon from "@/components/ui/Icon";
import { FC } from "react";

const FooterCopyright: FC = () => {
  return (
    <div className="border-t border-brand-blue/30 pt-4 md:pt-6 flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left gap-2">
      <p className="text-text-opposite-light text-xs md:text-sm">
        © 2025 Bot Anica. Все права защищены.
      </p>
      <div className="text-text-opposite-light text-xs md:text-sm flex items-center gap-2">
        <span>Создано с </span><Icon name="Heart" className="w-5 h-5 text-accent-special" /><span> для разработчиков</span>
      </div>
    </div>
  );
};

export default FooterCopyright;
