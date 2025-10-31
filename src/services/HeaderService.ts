import { CTAItem, HeaderData, LinkItem } from '../types/sections';
import { COURSES } from "@/constants/courseRegistry";
import { HEADER_NAVIGATION_LINKS as HOME_PAGE_HEADER_NAVIGATION_LINKS, HEADER_CTA_BUTTONS as HOME_PAGE_HEADER_CTA_BUTTONS } from "@/constants/home/header";

const isValidCourse = (courseUrlParam: string) => COURSES.some(course => course.urlParam === courseUrlParam);

export class HeaderService {
  // Course Page Data
  static async getCourseNavigationLinks(courseUrlParam: string): Promise<LinkItem[]> {
    if (!isValidCourse(courseUrlParam)) return [];
    const { HEADER_NAVIAGTION_LINKS } = await import(`@/constants/${courseUrlParam}/header`);
    return HEADER_NAVIAGTION_LINKS;
  }

  static async getCourseCTAButtons(courseUrlParam: string): Promise<CTAItem[]> {
    if (!isValidCourse(courseUrlParam)) return [];
    const { HEADER_CTA_BUTTONS } = await import(`@/constants/${courseUrlParam}/header`);
    return HEADER_CTA_BUTTONS;
  }

  static async getCoursePageData(courseUrlParam: string): Promise<HeaderData> {
    const navigationLinks = await HeaderService.getCourseNavigationLinks(courseUrlParam);
    const ctaButtons = await HeaderService.getCourseCTAButtons(courseUrlParam);

    return { ctaButtons, navigationLinks }
  }

  // Home Page Data
  static async getHomePageNavigationLinks(): Promise<LinkItem[]> {
    return HOME_PAGE_HEADER_NAVIGATION_LINKS;
  }

  static async getHomePageCTAButtons(): Promise<CTAItem[]> {
    return HOME_PAGE_HEADER_CTA_BUTTONS;
  }

  static async getHomePageData(): Promise<HeaderData> {
    const navigationLinks = await HeaderService.getHomePageNavigationLinks();
    const ctaButtons = await HeaderService.getHomePageCTAButtons();

    return { ctaButtons, navigationLinks }
  }
}