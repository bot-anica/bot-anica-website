import { Tariff, TariffPrice } from "@/types/sections";

export function checkIsCourseFree(tariffs: Tariff[]): boolean {
  if (!tariffs || tariffs.length === 0) {
    return false;
  }
  return tariffs.every((tariff: Tariff) => checkIsTariffFree(tariff));
}

export function checkIsTariffFree(tariff: Tariff): boolean {
  if (!tariff || !tariff.prices || tariff.prices.length === 0) {
    return false;
  }
  return tariff.prices.every((price: TariffPrice) => +price.price === 0);
}