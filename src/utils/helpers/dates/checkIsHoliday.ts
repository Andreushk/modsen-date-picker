import extractDateParts from './extractDateParts';

const checkIsHoliday = (date: Date, holidays: Date[]): boolean => {
  const { year, month, day } = extractDateParts(date);

  for (let i = 0; i < holidays.length; ) {
    const { year: hYear, month: hMonth, day: hDay } = extractDateParts(holidays[i]!);
    if (year === hYear && month === hMonth && day === hDay) return true;
    i += 1;
  }

  return false;
};

export default checkIsHoliday;
