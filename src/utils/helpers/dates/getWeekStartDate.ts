const getWeekStartDate = (date: Date): Date => {
  const start = new Date(date);

  const day = start.getDay();
  const diff = start.getDate() - day + (day === 0 ? -6 : 1);
  start.setDate(diff);

  return start;
};

export default getWeekStartDate;
