import React, { useEffect, useState } from 'react';

import { IIntervalDates } from '../DatePicker/types';
import CalendarTable from './CalendarTable/CalendarTable';
import CancelButton from './CancelButton/CancelButton';
import StyledContainer from './styled';
import TitleWithControls from './TitleWithControls/TitleWithControls';

interface IComponentProps {
  calendarDate: Date;
  selectedDate: string | null;
  interval: IIntervalDates;
  withOpeningAnimation: boolean;
  isStartsFromSunday: boolean;
  dateRestrictions: [Date, Date] | undefined;
  onDateClick: (day: string) => void;
  onDateChange: (newDate: Date) => void;
  onCancelClick: () => void;
}

const Calendar: React.FC<IComponentProps> = ({
  calendarDate,
  selectedDate,
  interval,
  isStartsFromSunday,
  withOpeningAnimation,
  dateRestrictions,
  onDateClick,
  onDateChange,
  onCancelClick,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(!withOpeningAnimation);

  useEffect((): void => {
    setIsVisible(true);
  }, []);

  const handleCalendarClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const isSomethingSelected: boolean = Boolean(
    selectedDate || interval.fromDate || interval.toDate,
  );

  return (
    <StyledContainer
      $isVisible={isVisible}
      $isWithCancelButton={isSomethingSelected}
      onClick={handleCalendarClick}
    >
      <TitleWithControls
        dateRestrictions={dateRestrictions}
        month={calendarDate.getMonth()}
        year={calendarDate.getFullYear()}
        onDateSwitch={onDateChange}
      />
      <CalendarTable
        calendarDate={calendarDate}
        selectedDate={selectedDate}
        interval={interval}
        isStartsFromSunday={isStartsFromSunday}
        dateRestrictions={dateRestrictions}
        onDateClick={onDateClick}
      />
      {isSomethingSelected && <CancelButton onClick={onCancelClick} />}
    </StyledContainer>
  );
};

export default React.memo(Calendar);