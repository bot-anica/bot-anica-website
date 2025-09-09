import { FC } from 'react';

interface CourseNotFoundProps {
  message?: string;
}

const CourseNotFound: FC<CourseNotFoundProps> = ({ message }) => (
  <section className="py-24 lg:py-28 xl:py-32 relative overflow-hidden flex justify-center items-center min-h-screen">
    <p className="text-red-500 text-lg">{message || 'Course not found.'}</p>
  </section>
);

export default CourseNotFound;
