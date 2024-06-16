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
  onDateClick: (day: string) => void;
  onDateChange: (newDate: Date) => void;
  onCancelClick: () => void;
}

const Calendar: React.FC<IComponentProps> = ({
  calendarDate,
  selectedDate,
  interval,
  withOpeningAnimation,
  onDateClick,
  onDateChange,
  onCancelClick,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(!withOpeningAnimation);

  useEffect((): void => {
    setIsVisible(true);
  }, []);

  const isSomethingSelected: boolean = Boolean(
    selectedDate || interval.fromDate || interval.toDate,
  );

  return (
    <StyledContainer $isVisible={isVisible} $isWithCancelButton={isSomethingSelected}>
      <TitleWithControls
        month={calendarDate.getMonth()}
        year={calendarDate.getFullYear()}
        onDateSwitch={onDateChange}
      />
      <CalendarTable
        calendarDate={calendarDate}
        selectedDate={selectedDate}
        interval={interval}
        onDateClick={onDateClick}
      />
      {isSomethingSelected && <CancelButton onClick={onCancelClick} />}
    </StyledContainer>
  );
};

export default React.memo(Calendar);
