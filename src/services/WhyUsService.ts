import { WhyUsData, WhyUsFeature, WhyUsStat } from '../types/sections';
import { SectionHeadersService } from './SectionHeadersService';

import { WHY_US_FEATURES as HOME_WHY_US_FEATURES, WHY_US_STATS as HOME_WHY_US_STATS } from '@/constants/home/whyUs';

export class WhyUsService {
  static async getHomeFeatures(): Promise<WhyUsFeature[]> {
    return HOME_WHY_US_FEATURES;
  }

  static async getHomeStats(): Promise<WhyUsStat[]> {
    return HOME_WHY_US_STATS;
  }

  static async getHomeData(): Promise<WhyUsData> {
    const header = await SectionHeadersService.getHomeHeader('whyUs');
    const features = await WhyUsService.getHomeFeatures();
    const stats = await WhyUsService.getHomeStats();
    
    return {
      header,
      features,
      stats,
    };
  }
}
