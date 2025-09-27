import { FC } from 'react';

interface CardButtonSkeletonProps {
  isPopular?: boolean;
}

const CardButtonSkeleton: FC<CardButtonSkeletonProps> = ({ isPopular }) => {
  return (
    <div
      className={`h-11 md:h-13 lg:h-15 rounded-lg w-full ${
        isPopular
          ? "bg-gradient-to-r from-brand-pink/20 to-brand-blue/20"
          : "bg-bg-hover"
      }`}
    ></div>
  );
};

export default CardButtonSkeleton;
