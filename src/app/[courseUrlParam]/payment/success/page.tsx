import { CourseService } from "@/services/CourseService";
import { Suspense } from "react";

export default async function SuccessPaymentPage({ params }: { params: Promise<{ courseUrlParam: string }> }) {
  const { courseUrlParam } = await params

  const course = await CourseService.getCourseByUrlParam(courseUrlParam);

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      Thank you for your payment!
    </Suspense>
  );
}