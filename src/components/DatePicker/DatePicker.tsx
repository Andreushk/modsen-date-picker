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
  onDateSelect,
  onLastDateSelect,
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
      setIntervals((prevIntervals) => {
        const enteredDate = formatStringToDate(date);
        const fromDate = formatStringToDate(prevIntervals.fromDate);
        const isToType = type === 'to';

        if (isToType && enteredDate < fromDate) {
          onLastDateSelect?.(date);
          return { fromDate: '', toDate: date };
        }

        const updatedIntervals = {
          fromDate: type === 'from' ? date : prevIntervals.fromDate,
          toDate: isToType ? date : prevIntervals.toDate,
        };

        type === 'from'
          ? onDateSelect?.(updatedIntervals.fromDate)
          : onLastDateSelect?.(updatedIntervals.toDate);

        return updatedIntervals;
      });
    },
    [onDateSelect, onLastDateSelect],
  );

  const handleCalendarOpen = useCallback((calendarType: CalendarTypes): void => {
    setShowingCalendarType(calendarType);
  }, []);

  const handleCalendarReset = useCallback((): void => {
    setIntervals({ fromDate: '', toDate: '' });
  }, []);

  const processAndSetIntervalDates = useCallback(
    (dateString: string) => {
      setIntervals((prevIntervals) => {
        if (!prevIntervals.fromDate) {
          if (onDateSelect) onDateSelect(dateString);
          return { ...prevIntervals, fromDate: dateString };
        }

        const clickedDate: Date = formatStringToDate(dateString);
        const fromDate: Date = formatStringToDate(prevIntervals.fromDate);

        if (clickedDate < fromDate) {
          if (onDateSelect) onDateSelect(dateString);
          return { ...prevIntervals, fromDate: dateString };
        }

        if (onLastDateSelect) {
          onLastDateSelect(dateString);
        }
        return { ...prevIntervals, toDate: dateString };
      });
    },
    [onDateSelect, onLastDateSelect],
  );

  const handleDayClick = useCallback(
    (dateString: string) => {
      if (withInterval) {
        processAndSetIntervalDates(dateString);
      } else {
        setIntervals({ fromDate: dateString, toDate: '' });
        if (onDateSelect) onDateSelect(dateString);
      }
    },
    [withInterval, processAndSetIntervalDates, onDateSelect],
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
