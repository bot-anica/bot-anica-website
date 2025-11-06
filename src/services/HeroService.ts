import { CTAItem, CourseHeroData, HomeHeroData, HeroImages, HeroTitle } from "../types/sections";
import { SectionBGImagesService } from "./SectionBGImagesService";
import { COURSES } from "@/constants/courseRegistry";

import {
  HERO_TITLE as HOME_HERO_TITLE, 
  HERO_SUBTITLE as HOME_HERO_SUBTITLE, 
  HERO_TEXT as HOME_HERO_TEXT, 
  HERO_CTA as HOME_HERO_CTA, 
  HERO_IMAGE as HOME_HERO_IMAGE
} from "@/constants/home/hero";

const isValidCourse = (courseUrlParam: string) => COURSES.some(course => course.urlParam === courseUrlParam);

export class HeroService {
  private static async importCourseHeroModule(courseUrlParam: string) {
    if (!isValidCourse(courseUrlParam)) {
      throw new Error(`Invalid course url param: ${courseUrlParam}`);
    }
    return await import(`@/constants/${courseUrlParam}/hero`);
  }

  static async getCourseTitle(courseUrlParam: string): Promise<HeroTitle> {
    const { HERO_TITLE } = await this.importCourseHeroModule(courseUrlParam);
    return HERO_TITLE;
  }

  static async getCourseSubtitle(courseUrlParam: string): Promise<string> {
    const { HERO_SUBTITLE } = await this.importCourseHeroModule(courseUrlParam);
    return HERO_SUBTITLE;
  }

  static async getCourseBenefits(courseUrlParam: string): Promise<string[]> {
    const { HERO_BENEFITS } = await this.importCourseHeroModule(courseUrlParam);
    return HERO_BENEFITS;
  }

  static async getCourseCTA(courseUrlParam: string): Promise<Record<'primary' | 'secondary', CTAItem>> {
    const { HERO_CTA } = await this.importCourseHeroModule(courseUrlParam);
    return HERO_CTA;
  }

  static async getCourseImages(courseUrlParam: string): Promise<Record<'rightImages' | 'imagesInText', HeroImages>> {
    const { HERO_IMAGES } = await this.importCourseHeroModule(courseUrlParam);
    return HERO_IMAGES;
  }

  static async getCourseData(courseUrlParam: string): Promise<CourseHeroData> {
    const title = await HeroService.getCourseTitle(courseUrlParam);
    const subtitle = await HeroService.getCourseSubtitle(courseUrlParam);
    const benefits = await HeroService.getCourseBenefits(courseUrlParam);
    const cta = await HeroService.getCourseCTA(courseUrlParam);
    const images = await HeroService.getCourseImages(courseUrlParam);
    const bgImages = await SectionBGImagesService.getCourseBGImages(courseUrlParam, 'hero');

    return {
      title,
      subtitle,
      benefits,
      cta,
      images,
      bgImages
    }
  }

  static async getHomeTitle(): Promise<HeroTitle> {
    return HOME_HERO_TITLE;
  }

  static async getHomeSubtitle(): Promise<string> {
    return HOME_HERO_SUBTITLE;
  }

  static async getHomeText(): Promise<string> {
    return HOME_HERO_TEXT;
  }

  static async getHomeCTA(): Promise<Record<'primary' | 'secondary', CTAItem>> {
    return HOME_HERO_CTA;
  }

  static async getHomeImage(): Promise<string> {
    return HOME_HERO_IMAGE;
  }

  static async getHomeData(): Promise<HomeHeroData> {
    const title = await HeroService.getHomeTitle();
    const subtitle = await HeroService.getHomeSubtitle();
    const text = await HeroService.getHomeText();
    const cta = await HeroService.getHomeCTA();
    const image = await HeroService.getHomeImage();

    return {
      title,
      subtitle,
      text,
      cta,
      image,
    }
  }
}