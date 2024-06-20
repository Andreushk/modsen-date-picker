type DateRestrictionsType = [Date, Date];
export interface IDatePickerProps {
  inputLabel?: string;
  toInputLabel?: string;
  inputPlaceholder?: string;
  toInputPlaceholder?: string;
  inputDefaultDateValue?: string;
  toInputDefaultDateValue?: string;
  withCalendarOpeningAnimation?: boolean;
  isWeeksStartsFromSunday?: boolean;
  withInterval?: boolean;
  dateRestrictions?: DateRestrictionsType;
  isWeeksCalendar?: boolean;
  isWithWeekends?: boolean;
  withTasks?: boolean;
  countryCodeForHolidays?: string;
}

export interface IIntervalDates {
  fromDate: string;
  toDate: string;
}

export type CalendarTypes = 'from' | 'to' | null;
