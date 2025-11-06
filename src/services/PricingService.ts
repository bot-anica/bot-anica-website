import { PricingPlansData } from "../types/sections";
import { SectionBGImagesService } from "./SectionBGImagesService";
import { SectionHeadersService } from "./SectionHeadersService";

export class PricingService {
  static async getCourseData(courseUrlParam: string): Promise<PricingPlansData> {
    const header = await SectionHeadersService.getCourseHeader(courseUrlParam, 'pricingPlans');
    const bgImages = await SectionBGImagesService.getCourseBGImages(courseUrlParam, 'pricingPlans');
    const popularPlanImages = await SectionBGImagesService.getCourseBGImages(courseUrlParam, 'popularCard');

    return {
      header,
      bgImages,
      popularPlanImages,
    }
  }
}
