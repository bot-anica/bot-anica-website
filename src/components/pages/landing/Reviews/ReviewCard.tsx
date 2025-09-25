'use client';

import type { FC } from 'react';
import { motion, easeOut } from 'framer-motion';
import { Youtube } from 'lucide-react';
import { Review } from '@/types/sections';
import { formatRelativeTime } from '@/utils/time';

interface ReviewCardProps {
  review: Review;
  isIntersecting: boolean;
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

const ReviewCard: FC<ReviewCardProps> = ({ review, isIntersecting, index }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      variants={cardVariants}
      animate={isIntersecting ? "visible" : "hidden"}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Youtube className="w-5 h-5 text-red-500" />
          <span className="font-medium text-gray-300">YouTube</span>
        </div>
        <span>{formatRelativeTime(review.createdAt)}</span>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed flex-grow">
        {review.text}
      </p>
    </motion.div>
  );
};

export default ReviewCard;
