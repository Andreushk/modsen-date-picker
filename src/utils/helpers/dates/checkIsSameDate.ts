function checkIsSameDate(firstDate: Date, secondDate: Date): boolean {
  return (
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
  );
}

export default checkIsSameDate;
