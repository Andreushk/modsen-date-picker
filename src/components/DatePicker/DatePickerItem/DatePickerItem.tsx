import React, { useCallback } from 'react';

import { Calendar, Input, OutsideClickHandler } from '@/components';

import { CalendarTypes, IIntervalDates } from '../types';
import StyledContainer from './styled';

export type DatePickerType = 'from' | 'to';

interface IComponentProps {
  type: DatePickerType;
  inputLabel: string | undefined;
  inputPlaceholder: string | undefined;
  isShowCalendar: boolean;
  calendarDate: Date;
  selectedDate: string | null;
  intervals: IIntervalDates;
  withCalendarOpeningAnimation: boolean;
  dateRestrictions: [Date, Date] | undefined;
  isWeeksStartsFromSunday: boolean;
  isWeeksCalendar: boolean;
  isWithWeekends: boolean;
  onDateChange: (newDate: Date) => void;
  onCalendarDayClick: (clickedDate: string) => void;
  onInputChanges: (enteredDate: string, datePickerType: DatePickerType) => void;
  onCalendarIconClick: (calendarType: CalendarTypes) => void;
  onCancelButtonClick: () => void;
}

const DatePickerItem: React.FC<IComponentProps> = ({
  type,
  inputLabel,
  inputPlaceholder,
  isShowCalendar,
  calendarDate,
  selectedDate,
  intervals,
  withCalendarOpeningAnimation,
  isWeeksStartsFromSunday,
  isWeeksCalendar,
  isWithWeekends,
  dateRestrictions,
  onDateChange,
  onCalendarDayClick,
  onCalendarIconClick,
  onInputChanges,
  onCancelButtonClick,
}) => {
  const handleDateInputChanges = useCallback(
    (enteredDate: string): void => {
      onInputChanges(enteredDate, type);
    },
    [type, onInputChanges],
  );

  const handleCalendarIconClick = useCallback((): void => {
    if (type === 'from') {
      onCalendarIconClick('from');
    } else {
      onCalendarIconClick('to');
    }
  }, [type, onCalendarIconClick]);

  const handleCalendarOutsideClick = useCallback((): void => {
    onCalendarIconClick(null);
  }, [onCalendarIconClick]);

  return (
    <OutsideClickHandler onOutsideClick={handleCalendarOutsideClick}>
      <StyledContainer>
        <Input
          label={inputLabel}
          value={type === 'from' ? intervals.fromDate : intervals.toDate}
          placeholder={inputPlaceholder}
          onChange={handleDateInputChanges}
          onCalendarIconClick={handleCalendarIconClick}
        />
        {isShowCalendar && (
          <Calendar
            calendarDate={calendarDate}
            selectedDate={selectedDate}
            interval={intervals}
            isStartsFromSunday={isWeeksStartsFromSunday}
            isWeeksCalendar={isWeeksCalendar}
            isWithWeekends={isWithWeekends}
            withOpeningAnimation={withCalendarOpeningAnimation}
            dateRestrictions={dateRestrictions}
            onDateClick={onCalendarDayClick}
            onDateChange={onDateChange}
            onCancelClick={onCancelButtonClick}
          />
        )}
      </StyledContainer>
    </OutsideClickHandler>
  );
};

export default React.memo(DatePickerItem);
