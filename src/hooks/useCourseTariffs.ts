import { useState, useEffect } from 'react';
import { Tariff } from '@/types/sections';
import { TariffService } from '@/services/TariffService';

export const useCourseTariffs = (courseId: number) => {
  const [tariffs, setTariffs] = useState<Tariff[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserIp = async () => {
      try {
        const res = await fetch("https://api64.ipify.org?format=json");
        const data = await res.json();
        return data.ip ?? null;
      } catch {
        return null;
      }
    };

    const fetchTariffs = async (userId: string | undefined) => {
      console.log("Fetching tariffs for courseId:", courseId);
      if (!courseId) return;

      try {
        setIsLoading(true);
        const fetchedTariffs = await TariffService.getTariffsByCourseId(courseId, userId);
        setTariffs(fetchedTariffs);
      } catch (err) {
        console.log(err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserIp().then(fetchTariffs);
  }, [courseId]);

  return { tariffs, isLoading, error };
};
