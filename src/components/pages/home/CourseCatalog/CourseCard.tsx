import { FC } from "react";
import { motion } from "framer-motion";

import { Button, Card } from "@/components/common";
import { cn } from "@/utils/cn";
import Icon from "@/components/ui/Icon";
import { CourseCatalogItem } from "@/types/sections";

interface CourseCardProps {
  isIntersecting: boolean;
  index: number;
  course: CourseCatalogItem;
}

const CourseCard: FC<CourseCardProps> = ({
  isIntersecting,
  index,
  course,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeInOut" }}
      className="relative h-full flex flex-col"
    >
      <Card
        className="relative p-4 md:p-5 lg:p-6 rounded-xl overflow-hidden bg-bg-secondary"
        childrenWrapperClassName="flex flex-col h-full"
        bgImages={course.bgImages || undefined}
      >
        {/* Top Gradient Border */}
        <div className={cn(
          "absolute top-0 left-0 right-0 h-1",
          index === 0 && "bg-brand-blue-light",
          index === 1 && "bg-brand-pink",
          index === 2 && "bg-brand-purple"
        )} />

        <div className="mb-12 flex items-center gap-4">
          {/* Icon */}
          <div className={cn("w-14 h-14 rounded-lg flex items-center justify-center",
            index === 0 && "bg-brand-blue-light",
            index === 1 && "bg-brand-pink",
            index === 2 && "bg-brand-purple"
          )}>
            <Icon name={course.icon} className="w-8 h-8 text-white" />
          </div>

          {/* Course Name */}
          <div className="text-2xl font-bold text-text-primary">
            {course.name}
          </div>
        </div>

        {/* Image */}
        {/* <div className="mb-4 px-4 py-2 rounded-lg overflow-hidden bg-bg-primary border border-border-primary">
          <img src={course.image} alt={course.name} className="w-full h-32 object-contain" />
        </div> */}

        {/* Title */}
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          <span>{course.titleMain} </span>
          <span className="text-brand-pink">{course.titleHighlight} </span>
          <span>{course.titleAdditional}</span>
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary mb-4">{course.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {course.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-text-secondary/5 text-text-secondary border border-text-secondary/50">
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <Button to={`/courses/${course.urlParam}`} className="w-full bg-bg-opposite text-text-opposite hover:bg-bg-hover transition-colors duration-200 mt-auto">
          <span>Подробнее</span>
          <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
        </Button>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
