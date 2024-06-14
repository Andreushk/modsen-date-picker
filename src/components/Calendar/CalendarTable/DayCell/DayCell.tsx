import React from 'react';

import StyledCell from './styled';

interface IComponentProps {
  day: number;
  selected: boolean;
  disabled: boolean;
}

const DayCell: React.FC<IComponentProps> = ({ day, selected, disabled }) => (
  <StyledCell data-day={disabled ? null : day} $disabled={disabled} $selected={selected}>
    {day}
  </StyledCell>
);

export default React.memo(DayCell);
