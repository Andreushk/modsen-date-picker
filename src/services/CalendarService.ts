import DatePicker, { IDatePickerProps } from '@/components/DatePicker/DatePicker';

type DecoratorType<IDatePickerProps> = (
  Component: React.FC<IDatePickerProps>,
) => React.FC<IDatePickerProps>;

class CalendarService {
  private calendarComponent: React.FC<IDatePickerProps>;

  constructor() {
    this.calendarComponent = DatePicker;
  }

  public addFunctionality(decorator: DecoratorType<IDatePickerProps>): void {
    this.calendarComponent = decorator(this.calendarComponent);
  }

  public getCalendar(): React.FC<IDatePickerProps> {
    return this.calendarComponent;
  }
}

export default CalendarService;
