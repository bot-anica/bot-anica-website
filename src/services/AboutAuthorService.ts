import { HomeAboutAuthorData, HomeAuthorData } from '../types/sections';
import { SectionHeadersService } from './SectionHeadersService';

import { HOME_AUTHOR_DATA } from '@/constants/home/aboutAuthor';

export class AboutAuthorService {
  static async getHomeAuthorData(): Promise<HomeAuthorData> {
    return HOME_AUTHOR_DATA;
  }

  static async getHomeData(): Promise<HomeAboutAuthorData> {
    const header = await SectionHeadersService.getHomeHeader('aboutAuthor');
    const authorData = await AboutAuthorService.getHomeAuthorData();
    
    return {
      header,
      authorData
    };
  }
}
