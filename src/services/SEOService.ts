import { AVAILABLE_PAGES, PageSEOCongfig, SEOConfig, SEOData } from '../types/sections';
import { COURSES } from "@/constants/courseRegistry";

const isValidCourse = (courseUrlParam: string) => COURSES.some(course => course.urlParam === courseUrlParam);

export class SEOService {
  private static async importCommonModule(courseUrlParam: string) {
    if (!isValidCourse(courseUrlParam)) {
      throw new Error(`Invalid course url param: ${courseUrlParam}`);
    }
    return await import(`@/constants/${courseUrlParam}/common`);
  }

  static async getDefaultSEOConfig(courseUrlParam: string): Promise<SEOConfig> {
    const { DEFAULT_SEO_CONFIG } = await this.importCommonModule(courseUrlParam);
    return DEFAULT_SEO_CONFIG;
  }

  static async getPageSEOConfigs(courseUrlParam: string): Promise<Record<AVAILABLE_PAGES, PageSEOCongfig>> {
    const { PAGE_SEO_CONFIGS } = await this.importCommonModule(courseUrlParam);
    return PAGE_SEO_CONFIGS;
  }

  static async getData(courseUrlParam: string): Promise<SEOData> {
    const defaultSEOConfig = await SEOService.getDefaultSEOConfig(courseUrlParam);
    const pageSEOConfigs = await SEOService.getPageSEOConfigs(courseUrlParam);

    return { defaultSEOConfig, pageSEOConfigs }
  }
}