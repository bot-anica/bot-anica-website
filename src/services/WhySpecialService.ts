import { WhySpecialPoint, WhySpecialSectionData } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';
import { StatsService } from './StatsService';

export class WhySpecialService {
  static async getCourseAllWhySpecialPoints(courseUrlParam: string): Promise<WhySpecialPoint[]> {
    const { WHY_SPECIAL_POINTS } = await import(`@/constants/${courseUrlParam}/whySpecial`);
    return WHY_SPECIAL_POINTS;
  }

  static async getCourseData(courseUrlParam: string): Promise<WhySpecialSectionData> {
    const header = await SectionHeadersService.getCourseHeader(courseUrlParam, 'whySpecial');
    const whySpecialPoints = await WhySpecialService.getCourseAllWhySpecialPoints(courseUrlParam);
    const stats = await StatsService.getCourseAllStats(courseUrlParam);
    const bgImages = await SectionBGImagesService.getCourseBGImages(courseUrlParam, 'whySpecial');
    
    return {
      header,
      whySpecialPoints,
      stats,
      bgImages,
    };
  }

  static async validateWhySpecialPointIndex(courseUrlParam: string, index: number): Promise<boolean> {
    const { WHY_SPECIAL_POINTS } = await import(`@/constants/${courseUrlParam}/whySpecial`);
    return index >= 0 && index < WHY_SPECIAL_POINTS.length;
  }
}
