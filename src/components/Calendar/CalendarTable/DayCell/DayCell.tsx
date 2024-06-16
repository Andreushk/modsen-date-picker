import React from 'react';

import StyledCell, { DayCellTypes } from './styled';

interface IComponentProps {
  day: number;
  variant: DayCellTypes;
  disabled: boolean;
}

const DayCell: React.FC<IComponentProps> = ({ day, disabled, variant }) => (
  <StyledCell data-day={disabled ? null : day} $disabled={disabled} $variant={variant}>
    {day}
  </StyledCell>
);

export default React.memo(DayCell);
