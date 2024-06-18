type DateRestrictionsType = [Date, Date];
export interface IDatePickerProps {
  inputLabel: string | undefined;
  toInputLabel: string | undefined;
  inputPlaceholder: string | undefined;
  toInputPlaceholder: string | undefined;
  inputDefaultDateValue: string | undefined;
  toInputDefaultDateValue: string | undefined;
  withCalendarOpeningAnimation: boolean | undefined;
  isWeeksStartsFromSunday: boolean | undefined;
  withInterval: boolean | undefined;
  dateRestrictions: DateRestrictionsType | undefined;
  isWeeksCalendar: boolean | undefined;
  isWithWeekends: boolean | undefined;
  countryCodeForHolidays: string | undefined;
}

export interface IIntervalDates {
  fromDate: string;
  toDate: string;
}

export type CalendarTypes = 'from' | 'to' | null;
