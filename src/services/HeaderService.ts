import { CTAItem, HeaderData, LinkItem } from '../types/sections';
import { COURSES } from "@/constants/courseRegistry";

const isValidCourse = (courseUrlParam: string) => COURSES.some(course => course.urlParam === courseUrlParam);

export class HeaderService {
  static async getNavigationLinks(courseUrlParam: string): Promise<LinkItem[]> {
    if (!isValidCourse(courseUrlParam)) return [];
    const { HEADER_NAVIAGTION_LINKS } = await import(`@/constants/${courseUrlParam}/header`);
    return HEADER_NAVIAGTION_LINKS;
  }

  static async getCTAButtons(courseUrlParam: string): Promise<CTAItem[]> {
    if (!isValidCourse(courseUrlParam)) return [];
    const { HEADER_CTA_BUTTONS } = await import(`@/constants/${courseUrlParam}/header`);
    return HEADER_CTA_BUTTONS;
  }

  static async getData(courseUrlParam: string): Promise<HeaderData> {
    const navigationLinks = await HeaderService.getNavigationLinks(courseUrlParam);
    const ctaButtons = await HeaderService.getCTAButtons(courseUrlParam);

    return { ctaButtons, navigationLinks }
  }
}