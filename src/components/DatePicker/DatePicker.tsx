import { useCallback, useState } from 'react';

import { ThemeProvider } from '@/components';
import { formatStringToDate } from '@/utils/helpers';

import DatePickerItem from './DatePickerItem/DatePickerItem';
import StyledContainer from './styled';
import { CalendarTypes, IDatePickerProps, IIntervalDates } from './types';

const DatePicker: React.FC<IDatePickerProps> = ({
  inputLabel,
  inputPlaceholder,
  toInputLabel,
  toInputPlaceholder,
  withCalendarOpeningAnimation,
  withInterval,
}) => {
  const [calendarDate, setCalendarDate] = useState<Date>(() => new Date());
  const [intervals, setIntervals] = useState<IIntervalDates>({ fromDate: '', toDate: '' });
  const [showingCalendarType, setShowingCalendarType] = useState<CalendarTypes>(null);

  const handleInputChanges = useCallback((enteredDate: string): void => {
    setIntervals({ fromDate: enteredDate, toDate: '' });
  }, []);

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
          type="from"
          inputLabel={inputLabel}
          inputPlaceholder={inputPlaceholder}
          isShowCalendar={showingCalendarType === 'from'}
          calendarDate={calendarDate}
          selectedDate={withInterval ? null : intervals.fromDate}
          intervals={intervals}
          withCalendarOpeningAnimation={Boolean(withCalendarOpeningAnimation)}
          onDateChange={setCalendarDate}
          onCalendarDayClick={handleDayClick}
          onInputChanges={handleInputChanges}
          onCalendarIconClick={handleCalendarOpen}
          onCancelButtonClick={handleCalendarReset}
        />
        {withInterval && (
          <DatePickerItem
            type="to"
            selectedDate={null}
            inputLabel={toInputLabel}
            inputPlaceholder={toInputPlaceholder}
            isShowCalendar={showingCalendarType === 'to'}
            calendarDate={calendarDate}
            intervals={intervals}
            withCalendarOpeningAnimation={Boolean(withCalendarOpeningAnimation)}
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
