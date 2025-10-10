import { FC } from "react";
import { motion } from 'framer-motion';

interface HeroFreeCourseLabelProps {
  itemVariants: any;
}

const HeroFreeCourseLabel: FC<HeroFreeCourseLabelProps> = ({ itemVariants }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="inline-block text-lg md:text-xl lg:text-2xl font-semibold bg-orange-600 text-white mt-8 mb-2 px-8 py-1 md:px-12 md:py-1.5 lg:px-16 lg:py-2 [--cut:1em] sm:[--cut:1.2em] md:[--cut:1.4em] [clip-path:polygon(0_0,100%_0,calc(100%-1em)_50%,100%_100%,0_100%,1em_50%)]"
    >
      FREE
    </motion.div>
  )
}

export default HeroFreeCourseLabel;