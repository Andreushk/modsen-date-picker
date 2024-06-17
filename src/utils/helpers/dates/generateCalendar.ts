const getStartOfWeek = (date: Date, startOfWeek: 0 | 1): Date => {
  const start = new Date(date);
  const day = start.getDay();

  let diff;
  if (startOfWeek === 0) {
    diff = start.getDate() - day;
  } else if (day === 0) {
    diff = start.getDate() - 6;
  } else {
    diff = start.getDate() - day + 1;
  }

  start.setDate(diff);
  return start;
};

const generateMonthCalendar = (date: Date, startOfWeek: 0 | 1): Date[] => {
  const days: Date[] = [];
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const firstDayOfWeek = (firstDayOfMonth.getDay() - startOfWeek + 7) % 7;
  const lastDayOfWeek = (lastDayOfMonth.getDay() - startOfWeek + 7) % 7;

  for (let i = firstDayOfWeek; i > 0; ) {
    days.push(new Date(year, month, 1 - i));
    i -= 1;
  }

  for (let i = 1; i <= lastDayOfMonth.getDate(); ) {
    days.push(new Date(year, month, i));
    i += 1;
  }

  for (let i = 1; i < 7 - lastDayOfWeek; ) {
    days.push(new Date(year, month + 1, i));
    i += 1;
  }

  return days;
};

const generateWeekCalendar = (date: Date, startOfWeek: 0 | 1): Date[] => {
  const days: Date[] = [];
  const start = getStartOfWeek(date, startOfWeek);

  for (let i = 0; i < 7; ) {
    const currentDate = new Date(start);
    currentDate.setDate(start.getDate() + i);
    days.push(currentDate);
    i += 1;
  }

  return days;
};

const generateCalendar = (type: 'month' | 'week', date: Date, isFromSunday: boolean): Date[] => {
  const startOfWeekIndex: 0 | 1 = isFromSunday ? 0 : 1;

  if (type === 'month') {
    return generateMonthCalendar(date, startOfWeekIndex);
  }
  return generateWeekCalendar(date, startOfWeekIndex);
};

export default generateCalendar;
