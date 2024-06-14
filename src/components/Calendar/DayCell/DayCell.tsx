import React from 'react';

import StyledCell from './styled';

interface IComponentProps {
  day: number;
  selected: boolean;
  disabled: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DayCell: React.FC<IComponentProps> = ({ day, selected, disabled }) => (
  <StyledCell $disabled={disabled}>{day}</StyledCell>
);

export default React.memo(DayCell);
