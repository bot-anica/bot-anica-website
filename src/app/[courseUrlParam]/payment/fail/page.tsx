import { CourseService } from "@/services/CourseService";
import { Suspense } from "react";

export default async function FailPaymentPage({ params }: { params: Promise<{ courseUrlParam: string }> }) {
  const { courseUrlParam } = await params

  const course = await CourseService.getCourseByUrlParam(courseUrlParam);

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
    	Payment failed. Please try again.
    </Suspense>
  );
}