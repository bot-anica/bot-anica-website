import { AVAILABLE_PAGES, PageSEOConfig, SEOConfig, SEOData } from '../types/sections';
import { COURSES } from "@/constants/courseRegistry";
import { DEFAULT_SEO_CONFIG as HOME_DEFAULT_SEO_CONFIG } from '@/constants/home/common';

const isValidCourse = (courseUrlParam: string) => COURSES.some(course => course.urlParam === courseUrlParam);

export class SEOService {
  private static async importCommonModule(courseUrlParam: string) {
    if (!isValidCourse(courseUrlParam)) {
      throw new Error(`Invalid course url param: ${courseUrlParam}`);
    }
    return await import(`@/constants/${courseUrlParam}/common`);
  }

  // Course pages SEO methods
  static async getDefaultCourseSEOConfig(courseUrlParam: string): Promise<SEOConfig> {
    const { DEFAULT_SEO_CONFIG } = await this.importCommonModule(courseUrlParam);
    return DEFAULT_SEO_CONFIG;
  }

  static async getCoursePageSEOConfigs(courseUrlParam: string): Promise<Record<AVAILABLE_PAGES, PageSEOConfig>> {
    const { PAGE_SEO_CONFIGS } = await this.importCommonModule(courseUrlParam);
    return PAGE_SEO_CONFIGS;
  }

  static async getCourseMetadata(courseUrlParam: string): Promise<SEOData> {
    const defaultSEOConfig = await SEOService.getDefaultCourseSEOConfig(courseUrlParam);
    const pageSEOConfigs = await SEOService.getCoursePageSEOConfigs(courseUrlParam);

    return { defaultSEOConfig, pageSEOConfigs }
  }

  // Home pages SEO methods
  static async getDefaultHomeSEOConfig(): Promise<SEOConfig> {
    return HOME_DEFAULT_SEO_CONFIG;
  }

  static async getHomeMetadata(): Promise<SEOData> {
    const defaultSEOConfig = await SEOService.getDefaultHomeSEOConfig();

    return { defaultSEOConfig }
  }
}