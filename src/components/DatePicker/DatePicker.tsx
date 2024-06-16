import { useCallback, useState } from 'react';

import { Calendar, Input, ThemeProvider } from '@/components';
import { formatStringToDate } from '@/utils/helpers';

import StyledContainer from './styled';
import { IDatePickerProps, IIntervalDates } from './types';

const DatePicker: React.FC<IDatePickerProps> = ({
  inputLabel,
  inputPlaceholder,
  withCalendarOpeningAnimation,
  withInterval,
}) => {
  const [date, setDate] = useState<Date>(() => new Date());
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [intervalDates, setIntervalDates] = useState<IIntervalDates>({ fromDate: '', toDate: '' });
  const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false);

  const handleInputChanges = useCallback((newValue: string): void => {
    setSelectedDate(newValue);
  }, []);

  const handleCalendarClick = useCallback((): void => {
    setIsShowCalendar((prevState) => !prevState);
  }, []);

  const handleCancelButtonClick = useCallback((): void => {
    setSelectedDate('');
    setIntervalDates({ fromDate: '', toDate: '' });
  }, []);

  const processAndSetIntervalDates = useCallback(
    (dateString: string) => {
      if (!intervalDates.fromDate) {
        setIntervalDates({ ...intervalDates, fromDate: dateString });
        return;
      }

      const clickedDate: Date = formatStringToDate(dateString);
      const fromDate: Date = formatStringToDate(intervalDates.fromDate);

      if (clickedDate < fromDate) {
        setIntervalDates({ ...intervalDates, fromDate: dateString });
      } else {
        setIntervalDates({ ...intervalDates, toDate: dateString });
      }
    },
    [intervalDates],
  );

  const handleDayClick = useCallback(
    (dayString: string) => {
      if (withInterval) {
        processAndSetIntervalDates(dayString);
      } else {
        setSelectedDate(dayString);
      }
    },
    [withInterval, processAndSetIntervalDates],
  );

  return (
    <ThemeProvider>
      <StyledContainer>
        <Input
          label={inputLabel}
          value={selectedDate}
          placeholder={inputPlaceholder}
          onChange={handleInputChanges}
          onCalendarClick={handleCalendarClick}
        />
        {isShowCalendar && (
          <Calendar
            date={date}
            selectedDate={selectedDate || null}
            interval={intervalDates}
            withOpeningAnimation={Boolean(withCalendarOpeningAnimation)}
            onDateClick={handleDayClick}
            onDateChange={setDate}
            onCancelClick={handleCancelButtonClick}
          />
        )}
      </StyledContainer>
    </ThemeProvider>
  );
};

export default DatePicker;
