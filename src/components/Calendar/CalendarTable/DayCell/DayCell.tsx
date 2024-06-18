import React from 'react';

import StyledCell, { DayCellTypes } from './styled';

interface IComponentProps {
  day: number;
  variant: DayCellTypes;
  isWeekend: boolean;
  disabled: boolean;
}

const DayCell: React.FC<IComponentProps> = ({ day, disabled, isWeekend, variant }) => (
  <StyledCell
    data-day={disabled ? null : day}
    $disabled={disabled}
    $variant={variant}
    $isWeekend={isWeekend}
  >
    {day}
  </StyledCell>
);

export default React.memo(DayCell);
