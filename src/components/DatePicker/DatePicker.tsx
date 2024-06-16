import { useCallback, useState } from 'react';

import { Calendar, Input, ThemeProvider } from '@/components';

import StyledContainer from './styled';

export interface IDatePickerProps {
  inputLabel: string | undefined;
  inputPlaceholder: string | undefined;
  withCalendarOpeningAnimation: boolean | undefined;
}

const DatePicker: React.FC<IDatePickerProps> = ({
  inputLabel,
  inputPlaceholder,
  withCalendarOpeningAnimation,
}) => {
  const [date, setDate] = useState<Date>(() => new Date());
  const [dateInputValue, setDateInputValue] = useState<string>('');
  const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false);

  const handleInputChanges = useCallback((newValue: string): void => {
    setDateInputValue(newValue);
  }, []);

  const handleCalendarClick = useCallback((): void => {
    setIsShowCalendar((prevState) => !prevState);
  }, []);

  const handleCancelButtonClick = useCallback((): void => {
    setDateInputValue('');
  }, []);

  const handleDayClick = useCallback(
    (day: string) => {
      const monthIndex: string = String(date.getMonth() + 1);
      const transformedDay: string = day.length > 1 ? day : `0${day}`;
      const transformedMonth: string = monthIndex.length > 1 ? monthIndex : `0${monthIndex}`;
      setDateInputValue(`${transformedDay}.${transformedMonth}.${date.getFullYear()}`);
    },
    [date],
  );

  return (
    <ThemeProvider>
      <StyledContainer>
        <Input
          label={inputLabel}
          value={dateInputValue}
          placeholder={inputPlaceholder}
          onChange={handleInputChanges}
          onCalendarClick={handleCalendarClick}
        />
        {isShowCalendar && (
          <Calendar
            date={date}
            selectedDate={dateInputValue || null}
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
