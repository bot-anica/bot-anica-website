"use client";

import type { FC } from 'react';
import { motion, easeOut } from 'framer-motion';

import Icon from '@/components/ui/Icon';
import { Testimonial } from '@/types/sections';

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
    return (
      <div className="w-10 h-10 md:w-12 md:h-12 bg-bg-primary rounded-full flex items-center justify-center border border-border-primary">
        <Icon name={iconName} className="w-5 h-5 md:w-6 md:h-6" style={{ color: color }} />
      </div>
    )
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:mb-16">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={testimonialVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="flex flex-col bg-bg-opposite/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-border-primary hover:border-brand-pink/30 transition-all duration-300 group"
        >
          <div className="flex items-center mb-3 md:mb-4">
            <div className="flex-shrink-0 mr-2 md:mr-3">
              {renderIcon(testimonial.icon, testimonial.iconColor)}
            </div>
            <div>
              <h4 className="text-text-primary font-semibold text-base md:text-lg group-hover:text-brand-pink transition-colors duration-300">
                {testimonial.name}
              </h4>
              <p className="text-text-secondary text-xs md:text-sm">
                {testimonial.role}
              </p>
            </div>
          </div>
          
          <blockquote className="text-sm md:text-base text-text-secondary mb-3 md:mb-4 italic leading-relaxed">
            &quot;{testimonial.quote}&quot;
          </blockquote>
          
          <div className="bg-gradient-to-r from-brand-pink/10 to-brand-blue/10 rounded-lg p-2 md:p-3 mt-auto border-l-4 border-brand-pink">
            <p className="text-brand-pink font-medium text-sm flex items-center gap-2">
              <Icon name='Star' className='w-4 h-4 md:w-5 md:h-5' />
              <span>{testimonial.achievement}</span>
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
