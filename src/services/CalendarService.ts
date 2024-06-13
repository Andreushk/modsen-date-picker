import DatePicker from '@/components/DatePicker/DatePicker';

type DecoratorType = (Component: React.FC) => React.FC;

class CalendarService {
  private calendarComponent: React.FC;

  constructor() {
    this.calendarComponent = DatePicker;
  }

  addFunctionality(decorator: DecoratorType): void {
    this.calendarComponent = decorator(this.calendarComponent);
  }

  getCalendar(): React.FC {
    return this.calendarComponent;
  }
}

export default CalendarService;
