import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { Card, CardProps } from "@/components/common";

interface AnimatedCourseCardProps extends CardProps {
  isIntersecting: boolean;
  index: number;
  children: ReactNode;
}

const AnimatedCourseCard: FC<AnimatedCourseCardProps> = ({
  isIntersecting,
  index,
  children,
  ...cardProps
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeInOut" }}
      className="relative h-full flex flex-col"
    >
      <Card {...cardProps}>
        {children}
      </Card>
    </motion.div>
  );
};

export default AnimatedCourseCard;
