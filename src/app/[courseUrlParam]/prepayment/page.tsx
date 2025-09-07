import { Suspense } from 'react';

import { CourseService } from '@/services/CourseService';
import PrePaymentClientPage from '@/components/pages/prePayment/PrePaymentClientPage';

interface PrePaymentPageProps {
  params: {
    courseUrlParam: string;
  };
  searchParams: {
    tariffId?: string;
  };
}

export default async function PrePaymentPage({ params, searchParams }: PrePaymentPageProps) {
  const { courseUrlParam } = params;
  const { tariffId } = searchParams;

  if (!tariffId) {
    return <div className="text-center p-10">Ошибка: Тариф не выбран.</div>;
  }

  const course = await CourseService.getCourseByUrlParam(courseUrlParam);
  
  const selectedTariff = course.tariffs.find(t => t.id.toString() === tariffId);

  if (!selectedTariff) {
    return <div className="text-center p-10">Ошибка: Выбранный тариф не найден.</div>;
  }

  return (
    <Suspense fallback={<div className="text-center p-10">Загрузка...</div>}>
      <PrePaymentClientPage course={course} tariff={selectedTariff} />
    </Suspense>
  );
}