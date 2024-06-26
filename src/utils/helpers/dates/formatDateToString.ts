const formatDateToString = (date: Date): string => {
  const day: string = String(date.getDate());
  const monthIndex: string = String(date.getMonth() + 1);
  const transformedDay: string = day.length > 1 ? day : `0${day}`;
  const transformedMonth: string = monthIndex.length > 1 ? monthIndex : `0${monthIndex}`;
  return `${transformedDay}/${transformedMonth}/${date.getFullYear()}`;
};

export default formatDateToString;
