import React, { useEffect, useState } from 'react';

import { IIntervalDates } from '../DatePicker/types';
import CalendarTable from './CalendarTable/CalendarTable';
import CancelButton from './CancelButton/CancelButton';
import StyledContainer from './styled';
import TitleWithControls from './TitleWithControls/TitleWithControls';

interface IComponentProps {
  date: Date;
  selectedDate: string | null;
  interval: IIntervalDates;
  withOpeningAnimation: boolean;
  onDateClick: (day: string) => void;
  onDateChange: (newDate: Date) => void;
  onCancelClick: () => void;
}

const Calendar: React.FC<IComponentProps> = ({
  date,
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
        month={date.getMonth()}
        year={date.getFullYear()}
        onDateSwitch={onDateChange}
      />
      <CalendarTable
        date={date}
        selectedDate={selectedDate}
        interval={interval}
        onDateClick={onDateClick}
      />
      {isSomethingSelected && <CancelButton onClick={onCancelClick} />}
    </StyledContainer>
  );
};

export default React.memo(Calendar);
