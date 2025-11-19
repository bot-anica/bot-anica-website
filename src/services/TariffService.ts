import { Tariff } from "../types/sections";

export class TariffService {
  static async getTariffsByCourseId(courseId: number): Promise<Tariff[]> {
    const response = await fetch(`/api/tariffs?course=${courseId}`, {method: "GET"});

    console.log("TariffService response:", response);

    if (!response.ok) {
      throw new Error("Failed to fetch tariffs");
    }

    return response.json();
  }
}
