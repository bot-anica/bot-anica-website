import { CourseService } from '@/services/CourseService';
import PrePaymentClientPage from '@/components/pages/prePayment/PrePaymentClientPage';
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

  const selectedTariff = course.tariffs.find(t => t.id.toString() === tariffId);

  if (!selectedTariff) {
    return <CourseNotFound message="Выбранный тариф не найден." />;
  }

  return <PrePaymentClientPage course={course} tariff={selectedTariff} />;
}
