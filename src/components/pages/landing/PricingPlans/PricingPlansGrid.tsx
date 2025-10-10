import PricingPlanCard from './PricingPlanCard';
import PricingPlanCardSkeleton from './PricingPlanCardSkeleton';

import { Tariff, PartialSectionBGImagesProps, Currency } from '@/types/sections';

interface PricingPlansGridProps {
  plans: Tariff[];
  popularPlanImages: PartialSectionBGImagesProps | null;
  isIntersecting: boolean;
  selectedCurrency: Currency;
  loading: boolean;
}

const PricingPlansGrid: React.FC<PricingPlansGridProps> = ({ plans, popularPlanImages, isIntersecting, selectedCurrency, loading }) => {
  const containerClasses = "flex flex-wrap justify-center gap-4 xl:gap-8 mb-8 lg:mb-12 sm:mb-16";

  const cardClasses = "w-full lg:flex-1 max-w-[420px]"; 

  if (loading) {
    return (
      <div className={containerClasses}>
        {[...Array(3)].map((_, index) => (
          <div key={index} className={cardClasses}>
            <PricingPlanCardSkeleton is_popular={index === 0} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      {plans.map((plan, index) => (
        <div key={plan.id} className={cardClasses}>
          <PricingPlanCard
            plan={plan}
            bgImages={plan.is_popular ? popularPlanImages : null}
            isIntersecting={isIntersecting}
            index={index}
            selectedCurrency={selectedCurrency}
          />
        </div>
      ))}
    </div>
  );
};

export default PricingPlansGrid;
