# modsen-date-picker

This is a library that allows to use inputs and an interactive calendar to work with dates. The library allows you to select a date (or date intervals) using inputs and interactive calendar. Under the hood, the Decorator pattern is used, so the look and feel of the components can be customized to fit any project's needs.
What the functionality can be:

1. For the input:

- Without label and placeholder,
- With label or placeholder;
- With label and placeholder;
- Ability to set a default date (or an interval);
- Possibility to have two inputs to select the date interval (with customization options listed above).

2. For the calendar:

- For months or weeks;
- Starts on Monday or Sunday;
- Displays weekends or not;
- Displays holidays or not (retrieves independently from API for any country);
- Selects a specific date or date interval;
- Has date restrictions or not;
- Ability to set a default date (or an interval);
- With an option to write tasks for a day or not.

# How to use

1. First of all you need to install the library:

```bash
npm install @andreushk/date-picker-library
```

or

```bash
yarn add @andreushk/date-picker-library
```

2. To start, you need to import a CalendarService from the package:

```bash
import { CalendarService } from '@andreushk/date-picker-library';
```

3. In general, you can already use input and calendar to work with dates:

```bash
const SomeComponent = () => {
  const calendarService = new CalendarService();
  const CalendarComponent = calendarService.getCalendar();

  return (
    <div>
      <CalendarComponent />
    </div>
  );
};
```

However, you can also add different functionality and customize the calendar to your needs by calling the addFunctionality method of the created CalendarService class instance (beforehand, import decorators from the library package):

```bash
import { CalendarService, withInputLabel, withInputPlaceholder } from '@andreushk/calendar-library';

const SomeComponent = () => {
  const calendarService = new CalendarService();

  calendarService.addFunctionality(withInputLabel('Date'));
  calendarService.addFunctionality(withInputPlaceholder('Placeholder'));
  const CalendarComponent = calendarService.getCalendar();

  return (
    <div>
      <CalendarComponent />
    </div>
  );
};
```

Here's an example of working with all the decorators at once:

```bash
import {
  CalendarService,
  withCalendarOpeningAnimation,
  withDatesRestrictions,
  withDefaultDate,
  withDefaultIntervalDates,
  withHolidays,
  withInputLabel,
  withInputPlaceholder,
  withInterval,
  withTasks,
  withWeekends,
  withWeeksCalendar,
  withWeeksFromSunday,
  withOnDateSelect,
  withOnLastDateSelect
} from '@andreushk/date-picker-library';

const SomeComponent = () => {

  const handleDateChange = useCallback((date: string) => {
    console.log('Selected date:', date);
  }, []);

  const handleLastDateChange = useCallback((date: string) => {
    console.log('Selected date:', date);
  }, []);

  const calendarService = new CalendarService();

  calendarService.addFunctionality(withInputLabel('Date'));
  calendarService.addFunctionality(withDefaultDate([2024, 6, 21]));
  calendarService.addFunctionality(withInputPlaceholder('Placeholder'));
  calendarService.addFunctionality(withInterval('From', 'To', 'Select Date', 'Select Date'));
  calendarService.addFunctionality(withDefaultIntervalDates([2024, 6, 21], [2024, 6, 21]));
  calendarService.addFunctionality(withDatesRestrictions([2024, 6, 21], [2024, 6, 21]));
  calendarService.addFunctionality(withWeeksFromSunday());
  calendarService.addFunctionality(withWeeksCalendar());
  calendarService.addFunctionality(withWeekends());
  calendarService.addFunctionality(withTasks());
  calendarService.addFunctionality(withOnDateSelect(handleDateChange));
  calendarService.addFunctionality(withOnLastDateSelect(handleLastDateChange));
  calendarService.addFunctionality(withCalendarOpeningAnimation());
  calendarService.addFunctionality(withHolidays('BY'));
  const CalendarComponent = calendarService.getCalendar();

  return (
    <div>
      <CalendarComponent />
    </div>
  );
};
```
