import { Suspense } from 'react';
import { Metadata } from 'next';

import { SEOService } from '@/services/SEOService';
import { HeroService } from '@/services/HeroService';
import { ProblemSolutionService } from '@/services/ProblemSolutionService';
import { WhySpecialService } from '@/services/WhySpecialService';
import { CourseProgramService } from '@/services/CourseProgramService';
import { PricingService } from '@/services/PricingService';
import { FaqService } from '@/services/FaqService';
import { CourseService } from '@/services/CourseService';
import { ReviewsService } from '@/services/ReviewsService';

import CourseProgram from '@/components/pages/landing/CourseProgram';
import FAQ from '@/components/pages/landing/FAQ';
import Hero from '@/components/pages/landing/Hero';
import Reviews from '@/components/pages/landing/Reviews';
import PricingPlans from '@/components/pages/landing/PricingPlans';
import ProblemSolution from '@/components/pages/landing/ProblemSolution';
import WhySpecial from '@/components/pages/landing/WhySpecial';
import CourseNotFound from '@/components/pages/course/CourseNotFound';
import { SuccessStoriesService } from '@/services/SuccessStoriesService';
import SuccessStories from '@/components/pages/landing/SuccessStories';

export async function generateMetadata({ params }: { params: Promise<{ courseUrlParam: string }> }): Promise<Metadata> {
  try {
    const { courseUrlParam } = await params
    const {defaultSEOConfig} = await SEOService.getCourseMetadata(courseUrlParam);
    return {
      title: `${defaultSEOConfig.title} - ${defaultSEOConfig.siteName}`,
      description: defaultSEOConfig.description,
      keywords: defaultSEOConfig.keywords,
      openGraph: {
        title: defaultSEOConfig.title,
        description: defaultSEOConfig.description,
        type: 'website',
        images: defaultSEOConfig.image,
      },
      twitter: {
        title: defaultSEOConfig.title,
        description: defaultSEOConfig.description,
        card: 'summary_large_image',
        images: defaultSEOConfig.image,
      },
    };
  } catch (error) {
    return {
      title: "Курс не найден",
      description: "Запрашиваемый курс не найден.",
    };
  }
}

export default async function LandingPage({ params }: { params: Promise<{ courseUrlParam: string }> }) {
  const { courseUrlParam } = await params

  let course;
  try {
    course = await CourseService.getCourseByUrlParam(courseUrlParam);
  } catch (error) {
    return <CourseNotFound />;
  }

  const [
    heroData,
    problemSolutionData,
    whySpecialData,
    courseProgramData,
    reviewsData,
    successStoriesData,
    pricingData,
    faqData,
  ] = await Promise.all([
    HeroService.getCourseData(courseUrlParam),
    ProblemSolutionService.getCourseData(courseUrlParam),
    WhySpecialService.getCourseData(courseUrlParam),
    CourseProgramService.getCourseData(courseUrlParam),
    ReviewsService.getCourseData(courseUrlParam),
    SuccessStoriesService.getCourseData(courseUrlParam),
    PricingService.getCourseData(courseUrlParam),
    FaqService.getCourseData(courseUrlParam),
  ]);

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Hero data={heroData} courseId={course.id} />
      <ProblemSolution data={problemSolutionData} />
      <WhySpecial data={whySpecialData} />
      <CourseProgram data={courseProgramData} showSectionSplitter={reviewsData != undefined} />
      {reviewsData && <Reviews data={reviewsData} showSectionSplitter={successStoriesData != undefined} />}
      {successStoriesData && <SuccessStories data={successStoriesData} />}
      <PricingPlans data={pricingData} courseId={course.id} />
      <FAQ data={faqData} courseId={course.id} />
    </Suspense>
  );
}
