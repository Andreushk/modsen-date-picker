const DATE_LENGTH_LIMIT = 10;
const DAY_MAX_SINGLE_DIGIT = 3;
const MAX_DAY = 31;
const MONTH_SINGLE_DIGIT_THRESHOLD = 10;
const MAX_MONTH = 12;
const DIVIDER_POSITION_FOR_DAY = 2;
const DIVIDER_POSITION_FOR_MONTH = 5;

function transformEnteredDate(inputDateValue: string, initialDate: string): string {
  let date = inputDateValue.trim().replace(/[^0-9/]/g, '');

  if (date.length > DATE_LENGTH_LIMIT) {
    return initialDate;
  }

  if (date.length < initialDate.length && date.at(-1) === initialDate.at(-1)) {
    return '';
  }

  if (date.length > 0 && date.length <= DIVIDER_POSITION_FOR_DAY) {
    const day = parseInt(date);
    if (date.length === 1 && day > DAY_MAX_SINGLE_DIGIT) {
      date = `0${date}`;
    } else if (date.length === DIVIDER_POSITION_FOR_DAY && day > MAX_DAY) {
      date = `${MAX_DAY}`;
    }
  } else if (date.length > DIVIDER_POSITION_FOR_DAY && date.length <= DIVIDER_POSITION_FOR_MONTH) {
    if (date[DIVIDER_POSITION_FOR_DAY] !== '/') {
      date = `${date.slice(0, DIVIDER_POSITION_FOR_DAY)}/${date.slice(DIVIDER_POSITION_FOR_DAY)}`;
    }
    const month = parseInt(date.slice(DIVIDER_POSITION_FOR_DAY + 1, DIVIDER_POSITION_FOR_MONTH));
    if (month > 1 && month < MONTH_SINGLE_DIGIT_THRESHOLD) {
      date = `${date.slice(0, DIVIDER_POSITION_FOR_DAY + 1)}0${month}`;
    } else if (month > MAX_MONTH) {
      date = `${date.slice(0, DIVIDER_POSITION_FOR_DAY + 1)}${MAX_MONTH}`;
    }
  } else if (date.length > DIVIDER_POSITION_FOR_MONTH && date.length <= DATE_LENGTH_LIMIT) {
    if (date[DIVIDER_POSITION_FOR_DAY] !== '/') {
      date = `${date.slice(0, DIVIDER_POSITION_FOR_DAY)}/${date.slice(DIVIDER_POSITION_FOR_DAY)}`;
    }
    if (date[DIVIDER_POSITION_FOR_MONTH] !== '/') {
      date = `${date.slice(0, DIVIDER_POSITION_FOR_MONTH)}/${date.slice(DIVIDER_POSITION_FOR_MONTH)}`;
    }
  }

  return date;
}

export default transformEnteredDate;
