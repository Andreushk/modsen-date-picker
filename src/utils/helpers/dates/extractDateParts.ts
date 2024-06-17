interface IDateParts {
  year: number;
  month: number;
  day: number;
}

const extractDateParts = (date: Date): IDateParts => ({
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
});

export default extractDateParts;
