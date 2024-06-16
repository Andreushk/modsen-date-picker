import React from 'react';

import { Calendar, Input } from '@/components';

import { CalendarTypes, IIntervalDates } from '../types';
import StyledContainer from './styled';

interface IComponentProps {
  type: 'from' | 'to';
  inputLabel: string | undefined;
  inputPlaceholder: string | undefined;
  isShowCalendar: boolean;
  calendarDate: Date;
  selectedDate: string | null;
  intervals: IIntervalDates;
  withCalendarOpeningAnimation: boolean;
  onDateChange: (newDate: Date) => void;
  onCalendarDayClick: (clickedDate: string) => void;
  onInputChanges: (newInputDate: string) => void;
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
  onDateChange,
  onCalendarDayClick,
  onCalendarIconClick,
  onInputChanges,
  onCancelButtonClick,
}) => {
  const handleCalendarIconClick = (): void => {
    if (type === 'from') {
      onCalendarIconClick('from');
    } else {
      onCalendarIconClick('to');
    }
  };

  return (
    <StyledContainer>
      <Input
        label={inputLabel}
        value={type === 'from' ? intervals.fromDate : intervals.toDate}
        placeholder={inputPlaceholder}
        onChange={onInputChanges}
        onCalendarIconClick={handleCalendarIconClick}
      />
      {isShowCalendar && (
        <Calendar
          calendarDate={calendarDate}
          selectedDate={selectedDate}
          interval={intervals}
          withOpeningAnimation={withCalendarOpeningAnimation}
          onDateClick={onCalendarDayClick}
          onDateChange={onDateChange}
          onCancelClick={onCancelButtonClick}
        />
      )}
    </StyledContainer>
  );
};

export default React.memo(DatePickerItem);
