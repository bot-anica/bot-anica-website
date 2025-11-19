import { useState, useEffect } from 'react';
import { Tariff } from '@/types/sections';
import { TariffService } from '@/services/TariffService';

export const useCourseTariffs = (courseId: number) => {
  const [tariffs, setTariffs] = useState<Tariff[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTariffs = async () => {
      if (!courseId) return;

      try {
        setIsLoading(true);
        const fetchedTariffs = await TariffService.getTariffsByCourseId(courseId);
        setTariffs(fetchedTariffs);
      } catch (err) {
        console.log(err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTariffs();
  }, [courseId]);

  return { tariffs, isLoading, error };
};
