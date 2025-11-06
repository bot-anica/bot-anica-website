import { HowItWorksData, HowItWorksStep } from '../types/sections';
import { SectionHeadersService } from './SectionHeadersService';

import { HOW_IT_WORKS_STEPS as HOME_HOW_IT_WORKS_STEPS } from '@/constants/home/howItWorks';

export class HowItWorksService {
  static async getSteps(): Promise<HowItWorksStep[]> {
    return HOME_HOW_IT_WORKS_STEPS;
  }

  static async getHomeData(): Promise<HowItWorksData> {
    const header = await SectionHeadersService.getHomeHeader('howItWorks');
    const steps = await HowItWorksService.getSteps();
    
    return {
      header,
      steps,
    };
  }
}
