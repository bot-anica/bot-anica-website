import { FC } from 'react';

import PaymentLayout from '@/components/pages/payment/common/PaymentLayout';
import CourseNotFoundHeader from './CourseNotFoundHeader';
import CourseNotFoundActions from './CourseNotFoundActions';

const CourseNotFound: FC = () => {
  return (
    <PaymentLayout header={<CourseNotFoundHeader />}>
      <CourseNotFoundActions />
    </PaymentLayout>
  );
};

export default CourseNotFound;
