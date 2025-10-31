import { FC } from 'react';
import Hero from './Hero';
import TechStack from './TechStack';
import ProblemSolutionSection from './ProblemSolution';
import CourseCatalog from './CourseCatalog';
import WhyUs from './WhyUs';
import HowItWorks from './HowItWorks';
// import ProjectShowcase from './ProjectShowcase';
import AboutAuthor from './AboutAuthor';
import FAQ from './FAQ';

const HomePage: FC = () => {
  return (
    <main>
      <Hero />
      <ProblemSolutionSection />
      <TechStack />
      <CourseCatalog />
      <HowItWorks />
      <WhyUs />
      {/* <ProjectShowcase /> */}
      <AboutAuthor />
      <FAQ />
      {/* Other sections will be added here */}
    </main>
  );
};

export default HomePage;
