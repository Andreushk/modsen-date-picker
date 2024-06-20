import { useCallback, useState } from 'react';

import { ThemeProvider } from '@/components';
import { FROM_DATE_PICKER_TYPE, TO_DATE_PICKER_TYPE } from '@/constants/datePickerTypes';
import useGetCountryHolidays from '@/hooks/useGetCountryHolidays';
import { formatStringToDate } from '@/utils/helpers';

import DatePickerItem, { DatePickerType } from './DatePickerItem/DatePickerItem';
import StyledContainer from './styled';
import { CalendarTypes, IDatePickerProps, IIntervalDates } from './types';

const DatePicker: React.FC<IDatePickerProps> = ({
  inputLabel,
  inputPlaceholder,
  toInputLabel,
  toInputPlaceholder,
  inputDefaultDateValue,
  toInputDefaultDateValue,
  withCalendarOpeningAnimation,
  isWeeksStartsFromSunday,
  dateRestrictions,
  withInterval,
  isWeeksCalendar,
  isWithWeekends,
  withTasks,
  countryCodeForHolidays,
}) => {
  const getInitialDate = (): Date => {
    if (inputDefaultDateValue) {
      return formatStringToDate(inputDefaultDateValue);
    }

    return new Date();
  };

  const [calendarDate, setCalendarDate] = useState<Date>(getInitialDate);
  const [showingCalendarType, setShowingCalendarType] = useState<CalendarTypes>(null);
  const [intervals, setIntervals] = useState<IIntervalDates>({
    fromDate: inputDefaultDateValue ?? '',
    toDate: toInputDefaultDateValue ?? '',
  });

  const holidays: Date[] | null = useGetCountryHolidays(calendarDate, countryCodeForHolidays);

  const handleInputChanges = useCallback(
    (date: string, type: DatePickerType): void => {
      if (type === 'to') {
        const enteredDate: Date = formatStringToDate(date);
        const fromDate: Date = formatStringToDate(intervals.fromDate);

        if (enteredDate < fromDate) {
          setIntervals({ fromDate: '', toDate: date });
          return;
        }
      }

      setIntervals((prevIntervals) => ({
        fromDate: type === 'from' ? date : prevIntervals.fromDate,
        toDate: type === 'to' ? date : prevIntervals.toDate,
      }));
    },
    [intervals],
  );

  const handleCalendarOpen = useCallback((calendarType: CalendarTypes): void => {
    setShowingCalendarType(calendarType);
  }, []);

  const handleCalendarReset = useCallback((): void => {
    setIntervals({ fromDate: '', toDate: '' });
  }, []);

  const processAndSetIntervalDates = useCallback(
    (dateString: string) => {
      if (!intervals.fromDate) {
        setIntervals({ ...intervals, fromDate: dateString });
        return;
      }

      const clickedDate: Date = formatStringToDate(dateString);
      const fromDate: Date = formatStringToDate(intervals.fromDate);

      if (clickedDate < fromDate) {
        setIntervals({ ...intervals, fromDate: dateString });
      } else {
        setIntervals({ ...intervals, toDate: dateString });
      }
    },
    [intervals],
  );

  const handleDayClick = useCallback(
    (dateString: string) => {
      if (withInterval) {
        processAndSetIntervalDates(dateString);
      } else {
        setIntervals({ fromDate: dateString, toDate: '' });
      }
    },
    [withInterval, processAndSetIntervalDates],
  );

  return (
    <ThemeProvider>
      <StyledContainer>
        <DatePickerItem
          type={FROM_DATE_PICKER_TYPE}
          inputLabel={inputLabel}
          inputPlaceholder={inputPlaceholder}
          isShowCalendar={showingCalendarType === FROM_DATE_PICKER_TYPE}
          calendarDate={calendarDate}
          selectedDate={withInterval ? null : intervals.fromDate}
          intervals={intervals}
          holidays={holidays}
          withTasks={Boolean(withTasks)}
          withCalendarOpeningAnimation={Boolean(withCalendarOpeningAnimation)}
          isWeeksStartsFromSunday={Boolean(isWeeksStartsFromSunday)}
          isWeeksCalendar={Boolean(isWeeksCalendar)}
          isWithWeekends={Boolean(isWithWeekends)}
          dateRestrictions={dateRestrictions}
          onDateChange={setCalendarDate}
          onCalendarDayClick={handleDayClick}
          onInputChanges={handleInputChanges}
          onCalendarIconClick={handleCalendarOpen}
          onCancelButtonClick={handleCalendarReset}
        />
        {withInterval && (
          <DatePickerItem
            type={TO_DATE_PICKER_TYPE}
            selectedDate={null}
            inputLabel={toInputLabel}
            inputPlaceholder={toInputPlaceholder}
            isShowCalendar={showingCalendarType === TO_DATE_PICKER_TYPE}
            calendarDate={calendarDate}
            intervals={intervals}
            holidays={holidays}
            withTasks={Boolean(withTasks)}
            withCalendarOpeningAnimation={Boolean(withCalendarOpeningAnimation)}
            isWeeksStartsFromSunday={Boolean(isWeeksStartsFromSunday)}
            isWeeksCalendar={Boolean(isWeeksCalendar)}
            isWithWeekends={Boolean(isWithWeekends)}
            dateRestrictions={dateRestrictions}
            onDateChange={setCalendarDate}
            onCalendarDayClick={handleDayClick}
            onInputChanges={handleInputChanges}
            onCalendarIconClick={handleCalendarOpen}
            onCancelButtonClick={handleCalendarReset}
          />
        )}
      </StyledContainer>
    </ThemeProvider>
  );
};

export default DatePicker;
