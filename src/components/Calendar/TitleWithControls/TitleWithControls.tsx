import React from 'react';

import { ReactComponent as ControlIcon } from '@/assets/icons/prev.svg';
import MONTHS from '@/constants/months';

import { StyledContainer, StyledControlButton, StyledTitle } from './styled';

interface IComponentProps {
  monthIndex: number;
  year: number;
}

const TitleWithControls: React.FC<IComponentProps> = ({ monthIndex, year }) => (
  <StyledContainer>
    <StyledControlButton type="button">
      <ControlIcon />
    </StyledControlButton>
    <StyledTitle>{`${MONTHS[monthIndex]} ${year}`}</StyledTitle>
    <StyledControlButton type="button">
      <ControlIcon />
    </StyledControlButton>
  </StyledContainer>
);

export default React.memo(TitleWithControls);
