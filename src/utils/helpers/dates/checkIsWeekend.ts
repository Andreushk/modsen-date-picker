const checkIsWeekend = (date: Date, isStartsFromSunday: boolean): boolean => {
  const day: number = date.getDay();

  if ((day === 0 || day === 6) && isStartsFromSunday) {
    return true;
  }

  if ((day === 6 || day === 0) && !isStartsFromSunday) {
    return true;
  }

  return false;
};

export default checkIsWeekend;
