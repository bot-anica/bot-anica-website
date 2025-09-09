import { PricingPlansData } from "../types/sections";
import { SectionBGImagesService } from "./SectionBGImagesService";
import { SectionHeadersService } from "./SectionHeadersService";

export class PricingService {
  static async getData(courseUrlParam: string): Promise<PricingPlansData> {
    const header = await SectionHeadersService.getHeader(courseUrlParam, 'pricingPlans');
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'pricingPlans');
    const popularPlanImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'popularCard');

    return {
      header,
      bgImages,
      popularPlanImages,
    }
  }
}
