import { useState, useEffect } from 'react';
import { Tariff } from '@/types/sections';
import { checkIsTariffFree } from '@/utils/course';
import { TariffService } from '@/services/TariffService';

export const useTariff = (tariffId: string) => {
  const [tariff, setTariff] = useState<Tariff | null>(null);
  const [isTariffFree, setIsTariffFree] = useState<boolean>(false);
  const [isLoadingTariff, setIsLoadingTariff] = useState<boolean>(true);
  const [tariffError, setTariffError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTariff = async () => {
      try {
        setIsLoadingTariff(true);
        const fetchedTariff = await TariffService.getTariffById(tariffId);
        if (fetchedTariff) {
          setTariff(fetchedTariff);
          setIsTariffFree(checkIsTariffFree(fetchedTariff));
        } else {
          setTariffError('Выбранный тариф не найден.');
        }
      } catch (error) {
        console.error('Error fetching tariff:', error);
        setTariffError('Ошибка при загрузке тарифа.');
      } finally {
        setIsLoadingTariff(false);
      }
    };

    if (tariffId) {
      fetchTariff();
    }
  }, [tariffId]);

  return { tariff, isTariffFree, isLoadingTariff, tariffError };
};
