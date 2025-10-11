import { Course, Tariff, TariffPrice } from "@/types/sections";

export function checkIsCourseFree(course: Course): boolean {
  if (!course || !course.tariffs || course.tariffs.length === 0) {
    return false;
  }
  return course.tariffs.every((tariff: Tariff) => checkIsTariffFree(tariff));
}

export function checkIsTariffFree(tariff: Tariff): boolean {
  if (!tariff || !tariff.prices || tariff.prices.length === 0) {
    return false;
  }
  return tariff.prices.every((price: TariffPrice) => +price.price === 0);
}