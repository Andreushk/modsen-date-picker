import React, { useEffect, useState } from 'react';

import CalendarTable from './CalendarTable/CalendarTable';
import CancelButton from './CancelButton/CancelButton';
import StyledContainer from './styled';
import TitleWithControls from './TitleWithControls/TitleWithControls';

interface IComponentProps {
  date: Date;
  selectedDate: string | null;
  withOpeningAnimation: boolean;
  onDateClick: (day: string) => void;
  onDateChange: (newDate: Date) => void;
  onCancelClick: () => void;
}

const Calendar: React.FC<IComponentProps> = ({
  date,
  selectedDate,
  withOpeningAnimation,
  onDateClick,
  onDateChange,
  onCancelClick,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(!withOpeningAnimation);

  useEffect((): void => {
    setIsVisible(true);
  }, []);

  return (
    <StyledContainer $isVisible={isVisible} $isWithCancelButton={!!selectedDate}>
      <TitleWithControls
        month={date.getMonth()}
        year={date.getFullYear()}
        onDateSwitch={onDateChange}
      />
      <CalendarTable date={date} selectedDate={selectedDate} onDateClick={onDateClick} />
      {selectedDate && <CancelButton onClick={onCancelClick} />}
    </StyledContainer>
  );
};

export default React.memo(Calendar);
