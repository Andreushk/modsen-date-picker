import React, { useCallback } from 'react';

import {
  Calendar,
  DatePickerErrorFallback,
  ErrorBoundary,
  Input,
  OutsideClickHandler,
} from '@/components';
import { FROM_DATE_PICKER_TYPE, TO_DATE_PICKER_TYPE } from '@/constants/datePickerTypes';

import { CalendarTypes, IIntervalDates } from '../types';
import StyledContainer from './styled';

export type DatePickerType = typeof FROM_DATE_PICKER_TYPE | typeof TO_DATE_PICKER_TYPE;

export const DATE_PICKER_ITEM_TEST_ID = 'date-picker-item-';

interface IComponentProps {
  type: DatePickerType;
  inputLabel: string | undefined;
  inputPlaceholder: string | undefined;
  isShowCalendar: boolean;
  calendarDate: Date;
  selectedDate: string | null;
  intervals: IIntervalDates;
  holidays: Date[] | null;
  withTasks: boolean;
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
  holidays,
  withTasks,
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
    if (type === FROM_DATE_PICKER_TYPE) {
      onCalendarIconClick(FROM_DATE_PICKER_TYPE);
    } else {
      onCalendarIconClick(TO_DATE_PICKER_TYPE);
    }
  }, [type, onCalendarIconClick]);

  const handleCalendarOutsideClick = useCallback((): void => {
    onCalendarIconClick(null);
  }, [onCalendarIconClick]);

  return (
    <ErrorBoundary fallback={<DatePickerErrorFallback />}>
      <OutsideClickHandler onOutsideClick={handleCalendarOutsideClick}>
        <StyledContainer data-testid={DATE_PICKER_ITEM_TEST_ID + type}>
          <Input
            label={inputLabel}
            value={type === FROM_DATE_PICKER_TYPE ? intervals.fromDate : intervals.toDate}
            placeholder={inputPlaceholder}
            onChange={handleDateInputChanges}
            onCalendarIconClick={handleCalendarIconClick}
          />
          {isShowCalendar && (
            <Calendar
              calendarDate={calendarDate}
              selectedDate={selectedDate}
              interval={intervals}
              holidays={holidays}
              withTasks={withTasks}
              isStartsFromSunday={isWeeksStartsFromSunday}
              isWeeksCalendar={isWeeksCalendar}
              isWithWeekends={isWithWeekends}
              isInputWithLabel={Boolean(inputLabel)}
              withOpeningAnimation={withCalendarOpeningAnimation}
              dateRestrictions={dateRestrictions}
              onDateClick={onCalendarDayClick}
              onDateChange={onDateChange}
              onCancelClick={onCancelButtonClick}
            />
          )}
        </StyledContainer>
      </OutsideClickHandler>
    </ErrorBoundary>
  );
};

export default React.memo(DatePickerItem);
