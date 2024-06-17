const getCalendarDates = (
  year: number,
  month: number,
  isFromSunday: boolean = false,
): Array<Date> => {
  const startDay: number = isFromSunday ? 0 : 1;

  const dates: Array<Date> = [];
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const firstDayOfWeek = (firstDayOfMonth.getDay() - startDay + 7) % 7;
  const lastDayOfWeek = (lastDayOfMonth.getDay() - startDay + 7) % 7;

  for (let i = firstDayOfWeek; i > 0; ) {
    dates.push(new Date(year, month, 1 - i));
    i -= 1;
  }

  for (let i = 1; i <= lastDayOfMonth.getDate(); ) {
    dates.push(new Date(year, month, i));
    i += 1;
  }

  for (let i = 1; i < 7 - lastDayOfWeek; ) {
    dates.push(new Date(year, month + 1, i));
    i += 1;
  }

  return dates;
};

export default getCalendarDates;
