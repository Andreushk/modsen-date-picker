function transformEnteredDate(inputDateValue: string, initialDate: string): string {
  let date = inputDateValue.trim().replace(/[^0-9/]/g, '');

  if (date.length > 10) {
    return initialDate;
  }

  if (date.length < initialDate.length && date.at(-1) === initialDate.at(-1)) {
    return '';
  }

  if (date.length > 0 && date.length <= 2) {
    const day = parseInt(date);
    if (date.length === 1 && day > 3) {
      date = `0${date}`;
    } else if (date.length === 2 && day > 31) {
      date = `31`;
    }
  } else if (date.length > 2 && date.length <= 5) {
    if (date[2] !== '/') {
      date = `${date.slice(0, 2)}/${date.slice(2)}`;
    }
    const month = parseInt(date.slice(3, 5));
    if (month > 1 && month < 10) {
      date = `${date.slice(0, 3)}0${month}`;
    } else if (month > 12) {
      date = `${date.slice(0, 3)}12`;
    }
  } else if (date.length > 5 && date.length <= 10) {
    if (date[2] !== '/') {
      date = `${date.slice(0, 2)}/${date.slice(2)}`;
    }
    if (date[5] !== '/') {
      date = `${date.slice(0, 5)}/${date.slice(5)}`;
    }
  }

  return date;
}

export default transformEnteredDate;
