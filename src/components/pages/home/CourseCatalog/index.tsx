"use client";

import { FC } from "react";

import { SectionHeader, SectionSplitter } from "@/components/common";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { CourseCatalogData } from "@/types/sections";
import CourseCard from "./CourseCard";

interface CourseCatalogProps {
  data: CourseCatalogData
}

const CourseCatalog: FC<CourseCatalogProps> = ({ data }) => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];

  return (
    <section ref={ref} id="courses" className="py-24 lg:py-28 xl:py-32 bg-bg-primary overflow-hidden relative">
      <SectionHeader
        title={data.header.title}
        subtitle={data.header.subtitle}
        isIntersecting={isIntersecting}
        className="max-w-lg mx-auto"
      />
      <SectionSplitter />

      <div className="container mx-auto px-4 flex justify-center flex-wrap gap-8 md:gap-10 lg:gap-16 items-stretch">  
        {data.courses.map((course, index) => (
          <CourseCard
            key={course.urlParam}
            isIntersecting={isIntersecting}
            index={index}
            course={course}
          />
        ))}

      </div>
    </section>
  );
};

export default CourseCatalog;