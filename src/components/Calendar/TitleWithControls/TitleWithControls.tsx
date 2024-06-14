import React from 'react';

import { ReactComponent as ControlIcon } from '@/assets/icons/prev.svg';
import MONTHS from '@/constants/months';

import { StyledContainer, StyledControlButton, StyledTitle } from './styled';

interface IComponentProps {
  month: number;
  year: number;
  onDateSwitch: (newDate: Date) => void;
}

const TitleWithControls: React.FC<IComponentProps> = ({ month, year, onDateSwitch }) => {
  const handleNextButtonClick = (): void => {
    onDateSwitch(new Date(year, month + 1));
  };

  const handlePrevButtonClick = (): void => {
    onDateSwitch(new Date(year, month - 1));
  };

  return (
    <StyledContainer>
      <StyledControlButton type="button" onClick={handlePrevButtonClick}>
        <ControlIcon />
      </StyledControlButton>
      <StyledTitle>{`${MONTHS[month]} ${year}`}</StyledTitle>
      <StyledControlButton type="button" onClick={handleNextButtonClick}>
        <ControlIcon />
      </StyledControlButton>
    </StyledContainer>
  );
};

export default React.memo(TitleWithControls);
