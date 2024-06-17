const getCalendarDates = (year: number, month: number): Array<Date> => {
  const dates: Array<Date> = [];
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // Monday is the first day
  const firstDayOfWeek = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;
  // Sunday is the last day
  const lastDayOfWeek = lastDayOfMonth.getDay() === 0 ? 6 : lastDayOfMonth.getDay() - 1;

  for (let i = firstDayOfWeek; i > 0; ) {
    dates.push(new Date(year, month, -i + 1));
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
