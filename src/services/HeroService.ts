import { CTAItem, HeroData, HeroImages, HeroTitle } from "../types/sections";
import { SectionBGImagesService } from "./SectionBGImagesService";
import { COURSES } from "@/constants/courseRegistry";

const isValidCourse = (courseUrlParam: string) => COURSES.some(course => course.urlParam === courseUrlParam);

export class HeroService {
  private static async importHeroModule(courseUrlParam: string) {
    if (!isValidCourse(courseUrlParam)) {
      throw new Error(`Invalid course url param: ${courseUrlParam}`);
    }
    return await import(`@/constants/${courseUrlParam}/hero`);
  }

  static async getTitle(courseUrlParam: string): Promise<HeroTitle> {
    const { HERO_TITLE } = await this.importHeroModule(courseUrlParam);
    return HERO_TITLE;
  }

  static async getSubtitle(courseUrlParam: string): Promise<string> {
    const { HERO_SUBTITLE } = await this.importHeroModule(courseUrlParam);
    return HERO_SUBTITLE;
  }

  static async getBenefits(courseUrlParam: string): Promise<string[]> {
    const { HERO_BENEFITS } = await this.importHeroModule(courseUrlParam);
    return HERO_BENEFITS;
  }

  static async getCTA(courseUrlParam: string): Promise<Record<'primary' | 'secondary', CTAItem>> {
    const { HERO_CTA } = await this.importHeroModule(courseUrlParam);
    return HERO_CTA;
  }

  static async getImages(courseUrlParam: string): Promise<Record<'rightImages' | 'imagesInText', HeroImages>> {
    const { HERO_IMAGES } = await this.importHeroModule(courseUrlParam);
    return HERO_IMAGES;
  }

  static async getData(courseUrlParam: string): Promise<HeroData> {
    const title = await HeroService.getTitle(courseUrlParam);
    const subtitle = await HeroService.getSubtitle(courseUrlParam);
    const benefits = await HeroService.getBenefits(courseUrlParam);
    const cta = await HeroService.getCTA(courseUrlParam);
    const images = await HeroService.getImages(courseUrlParam);
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'hero');

    return {
      title,
      subtitle,
      benefits,
      cta,
      images,
      bgImages
    }
  }
}