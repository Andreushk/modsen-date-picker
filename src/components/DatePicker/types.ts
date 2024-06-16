export interface IDatePickerProps {
  inputLabel: string | undefined;
  toInputLabel: string | undefined;
  inputPlaceholder: string | undefined;
  toInputPlaceholder: string | undefined;
  withCalendarOpeningAnimation: boolean | undefined;
  withInterval: boolean | undefined;
}

export interface IIntervalDates {
  fromDate: string;
  toDate: string;
}

export type CalendarTypes = 'from' | 'to' | null;
