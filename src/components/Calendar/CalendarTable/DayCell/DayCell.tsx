import React from 'react';

import StyledCell, { DayCellTypes } from './styled';

interface IComponentProps {
  day: number;
  disabled: boolean;
  variant: DayCellTypes;
  isWeekend: boolean;
  isHoliday: boolean;
}

const DayCell: React.FC<IComponentProps> = ({ day, disabled, variant, isWeekend, isHoliday }) => (
  <StyledCell
    data-day={disabled ? null : day}
    $disabled={disabled}
    $variant={variant}
    $isHoliday={isHoliday}
    $isWeekend={isWeekend}
  >
    {day}
  </StyledCell>
);

export default React.memo(DayCell);
