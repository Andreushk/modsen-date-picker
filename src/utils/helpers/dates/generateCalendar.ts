import { DAYS_IN_WEEK, WeekDays } from '@/constants/days';

const getStartOfWeek = (date: Date, startOfWeek: WeekDays.Sunday | WeekDays.Monday): Date => {
  const day = date.getDay();
  const diff = day < startOfWeek ? day + DAYS_IN_WEEK - startOfWeek : day - startOfWeek;
  const start = new Date(date);
  start.setDate(date.getDate() - diff);
  return start;
};

const generateMonthCalendar = (
  date: Date,
  startOfWeek: WeekDays.Sunday | WeekDays.Monday,
): Date[] => {
  const days: Date[] = [];
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const firstDayOfWeek = (firstDayOfMonth.getDay() - startOfWeek + DAYS_IN_WEEK) % DAYS_IN_WEEK;
  const lastDayOfWeek = (lastDayOfMonth.getDay() - startOfWeek + DAYS_IN_WEEK) % DAYS_IN_WEEK;

  for (let i = firstDayOfWeek; i > 0; i--) {
    days.push(new Date(year, month, 1 - i));
  }

  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    days.push(new Date(year, month, i));
  }

  for (let i = 1; i < DAYS_IN_WEEK - lastDayOfWeek; i++) {
    days.push(new Date(year, month + 1, i));
  }

  return days;
};

const generateWeekCalendar = (
  date: Date,
  startOfWeek: WeekDays.Sunday | WeekDays.Monday,
): Date[] => {
  const days: Date[] = [];
  const start = getStartOfWeek(date, startOfWeek);

  for (let i = 0; i < DAYS_IN_WEEK; i++) {
    const currentDate = new Date(start);
    currentDate.setDate(start.getDate() + i);
    days.push(currentDate);
  }

  return days;
};

const generateCalendar = (type: 'month' | 'week', date: Date, isFromSunday: boolean): Date[] => {
  const startOfWeek: WeekDays.Sunday | WeekDays.Monday = isFromSunday
    ? WeekDays.Sunday
    : WeekDays.Monday;

  if (type === 'month') {
    return generateMonthCalendar(date, startOfWeek);
  }

  return generateWeekCalendar(date, startOfWeek);
};

export default generateCalendar;
