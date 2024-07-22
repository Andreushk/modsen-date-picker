import { WeekDays } from '@/constants/days';

const checkIsWeekend = (date: Date, isStartsFromSunday: boolean): boolean => {
  const day: number = date.getDay();

  return isStartsFromSunday
    ? day === WeekDays.Sunday || day === WeekDays.Saturday
    : day === WeekDays.Saturday || day === WeekDays.Sunday;
};

export default checkIsWeekend;
