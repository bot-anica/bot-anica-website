import { FC } from "react";
import { X, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/common";
import { ButtonSize, ButtonVariant } from "@/types/common";

interface HeaderMobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HeaderMobileMenuButton: FC<HeaderMobileMenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <Button
      onClick={onClick}
      aria-label="Открыть меню"
      variant={ButtonVariant.SECONDARY}
      size={ButtonSize.ICON}
      className="md:hidden"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-full h-full"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-full h-full"
          >
            <Menu size={20} className="sm:w-6 sm:h-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default HeaderMobileMenuButton;
