import { HomeTechStackData } from '@/types/sections';
import { SectionHeadersService } from './SectionHeadersService';

export class TechStackService {
  static async getHomeData(): Promise<HomeTechStackData> {
    const header = await SectionHeadersService.getHomeHeader('techStack');
    
    return {
      header,
    }
  }
}
