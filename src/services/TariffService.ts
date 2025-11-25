import { Tariff } from "@/types/sections";

export class TariffService {
  static async getTariffsByCourseId(courseId: number): Promise<Tariff[]> {
    const response = await fetch(`/api/tariffs?course=${courseId}`, { method: "GET" });

    if (!response.ok) {
      throw new Error("Failed to fetch tariffs");
    }

    return response.json();
  }

  static async getTariffById(tariffId: string): Promise<Tariff | null> {
    const response = await fetch(`/api/tariff?tariffId=${tariffId}`, { method: "GET" });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error("Failed to fetch tariff data");
    }

    return response.json();
  }
}
