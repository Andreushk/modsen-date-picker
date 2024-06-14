import React, { useEffect, useState } from 'react';

import CalendarTable from './CalendarTable/CalendarTable';
import StyledContainer from './styled';
import TitleWithControls from './TitleWithControls/TitleWithControls';

interface IComponentProps {
  date: Date;
  withOpeningAnimation: boolean;
  onDateChange: (newDate: Date) => void;
}

const Calendar: React.FC<IComponentProps> = ({ date, withOpeningAnimation, onDateChange }) => {
  const [isVisible, setIsVisible] = useState<boolean>(!withOpeningAnimation);

  useEffect((): void => {
    setIsVisible(true);
  }, []);

  return (
    <StyledContainer $isVisible={isVisible}>
      <TitleWithControls
        month={date.getMonth()}
        year={date.getFullYear()}
        onDateSwitch={onDateChange}
      />
      <CalendarTable date={date} />
    </StyledContainer>
  );
};

export default React.memo(Calendar);
