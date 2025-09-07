import { PricingPlansData } from "../types/sections";
import { CourseService } from "./CourseService";
import { SectionBGImagesService } from "./SectionBGImagesService";
import { SectionHeadersService } from "./SectionHeadersService";

export class PricingService {
  static async getData(courseUrlParam: string): Promise<PricingPlansData> {
    const header = await SectionHeadersService.getHeader(courseUrlParam, 'pricingPlans');
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'pricingPlans');
    const popularPlanImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'popularCard');
    const courseData = await CourseService.getCourseByUrlParam(courseUrlParam);

    return {
      header,
      bgImages,
      popularPlanImages,
      plans: courseData.tariffs || []
    }
  }
}
