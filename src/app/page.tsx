import { type FC } from 'react';
import { Metadata } from 'next';

import AboutAuthor from '@/components/pages/home/AboutAuthor';
import CourseCatalog from '@/components/pages/home/CourseCatalog';
import FAQ from '@/components/pages/home/FAQ';
import Hero from '@/components/pages/home/Hero';
import HowItWorks from '@/components/pages/home/HowItWorks';
import ProblemSolutionSection from '@/components/pages/home/ProblemSolution';
import TechStack from '@/components/pages/home/TechStack';
import WhyUs from '@/components/pages/home/WhyUs';

import { SEOService } from '@/services/SEOService';

export async function generateMetadata(): Promise<Metadata> {
  const {defaultSEOConfig} = await SEOService.getHomeMetadata();
  return {
    title: `${defaultSEOConfig.title} | ${defaultSEOConfig.siteName}`,
    description: defaultSEOConfig.description,
    keywords: defaultSEOConfig.keywords,
    openGraph: {
      title: defaultSEOConfig.title,
      description: defaultSEOConfig.description,
      type: 'website',
    },
    twitter: {
      title: defaultSEOConfig.title,
      description: defaultSEOConfig.description,
    },
  };
}

const HomePage: FC = () => {
  return (
    <main>
      <Hero />
      <ProblemSolutionSection />
      <TechStack />
      <CourseCatalog />
      <HowItWorks />
      <WhyUs />
      <AboutAuthor />
      <FAQ />
    </main>
  );
};

export default HomePage;