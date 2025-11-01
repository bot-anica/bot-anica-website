'use client';

import type { FC } from 'react';
import { motion, easeOut } from 'framer-motion';
import { Youtube } from 'lucide-react';
import { Review } from '@/types/sections';
import { formatRelativeTime } from '@/utils/time';
import { useAnimatedSection } from '@/hooks/useAnimatedSection';

interface ReviewCardProps {
  review: Review;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: easeOut,
    },
  }),
};

const ReviewCard: FC<ReviewCardProps> = ({ review, index }) => {
  const { ref, hasIntersected } = useAnimatedSection();

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      variants={cardVariants}
      animate={hasIntersected ? "visible" : "hidden"}
      className="bg-bg-secondary backdrop-blur-sm rounded-2xl p-6 border border-border-primary hover:border-border-hover transition-colors duration-300 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-4 text-sm text-text-tertiary">
        <div className="flex items-center gap-2">
          <Youtube className="w-5 h-5 text-accent-special" />
          <span className="font-medium text-text-secondary">YouTube</span>
        </div>
        <span>{formatRelativeTime(review.createdAt)}</span>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed flex-grow">
        {review.text}
      </p>
    </motion.div>
  );
};

export default ReviewCard;
