import { CourseService } from '@/services/CourseService';
import PrePaymentClientPage from '@/components/pages/prePayment/PrePaymentWrapper';
import CourseNotFound from './CourseNotFound';

interface PrePaymentProps {
  courseUrlParam: string;
  tariffId: string;
}

export default async function PrePayment({ courseUrlParam, tariffId }: PrePaymentProps) {
  const course = await CourseService.getCourseByUrlParam(courseUrlParam);
  
  if (!course) {
    return <CourseNotFound message="Курс не найден." />;
  }

  return <PrePaymentClientPage course={course} courseUrlParam={courseUrlParam} tariffId={tariffId} />;
}
