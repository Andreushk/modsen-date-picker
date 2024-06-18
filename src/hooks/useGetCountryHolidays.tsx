import { useEffect, useState } from 'react';

import API_BASE_URL from '@/constants/holidays';
import IHoliday from '@/types/api';

const fetchHolidaysData = async (countryCode: string, year: number, signal: AbortSignal) => {
  const response: Response = await fetch(`${API_BASE_URL}/${year}/${countryCode}`, { signal });
  const data: IHoliday[] = await response.json();
  return data;
};

const useGetCountryHolidays = (date: Date, countryCode?: string): Date[] | null => {
  const [holidays, setHolidays] = useState<Date[] | null>(null);

  useEffect(() => {
    if (!countryCode) {
      return;
    }

    const abortController: AbortController = new AbortController();
    const { signal } = abortController;

    const makeRequest = async () => {
      try {
        const response = await fetchHolidaysData(countryCode, date.getFullYear(), signal);

        const holidaysData: Date[] = [];

        response.forEach((holiday) => {
          const holidayDate: Date = new Date(holiday.date);
          holidaysData.push(holidayDate);
        });

        setHolidays(holidaysData);
      } catch (e) {
        const errorName = (e as Error).name;
        if (errorName !== 'AbortError') {
          console.error(e);
        }
      }
    };

    makeRequest();

    return () => {
      abortController.abort();
    };
  }, [countryCode, date]);

  return holidays;
};

export default useGetCountryHolidays;
