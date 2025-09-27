"use client";

import type { FC } from 'react';
import { motion, easeOut } from 'framer-motion';

import { Testimonial } from '@/types/sections';
import Icon from '@/components/ui/Icon';

interface SuccessStoriesTestimonialsProps {
  testimonials: Testimonial[];
  isIntersecting: boolean;
}

const testimonialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: easeOut,
    },
  }),
};

export const SuccessStoriesTestimonials: FC<SuccessStoriesTestimonialsProps> = ({
  testimonials,
  isIntersecting,
}) => {
  const renderIcon = (iconName: string, color: string) => {
    return <Icon name={iconName} className="w-10 h-10" style={{ color: color }} />
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={testimonialVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="flex flex-col bg-bg-hover/50 backdrop-blur-sm rounded-2xl p-6 border border-border-primary hover:border-accent/30 transition-all duration-300 group"
        >
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
              {renderIcon(testimonial.icon, testimonial.iconColor)}
            </div>
            <div>
              <h4 className="text-text-primary font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                {testimonial.name}
              </h4>
              <p className="text-text-secondary text-sm">
                {testimonial.role}
              </p>
            </div>
          </div>
          
          <div className='flex-grow flex flex-col justify-between'>
            <blockquote className="text-text-secondary mb-4 italic leading-relaxed">
              `&quot;`{testimonial.quote}`&quot;`
            </blockquote>
            
            <div className="bg-gradient-to-r from-accent/10 to-accent-secondary/10 rounded-lg p-3 border-l-4 border-accent">
              <p className="text-accent font-medium text-sm">
                ✨ {testimonial.achievement}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
