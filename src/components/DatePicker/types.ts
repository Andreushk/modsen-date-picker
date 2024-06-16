export interface IDatePickerProps {
  inputLabel: string | undefined;
  inputPlaceholder: string | undefined;
  withCalendarOpeningAnimation: boolean | undefined;
  withInterval: boolean | undefined;
}

export interface IIntervalDates {
  fromDate: string;
  toDate: string;
}
