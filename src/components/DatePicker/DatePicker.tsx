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
            onDateChange={setDate}
            withOpeningAnimation={Boolean(withCalendarOpeningAnimation)}
          />
        )}
      </StyledContainer>
    </ThemeProvider>
  );
};

export default DatePicker;
