import React from 'react';

import { DAYS } from '@/constants/days';

import StyledCell from './styled';

interface IComponentProps {
  isStartsFromSunday: boolean;
}

const TableHead: React.FC<IComponentProps> = ({ isStartsFromSunday }) => {
  const weekDays = !isStartsFromSunday ? DAYS : DAYS.slice(-1).concat(DAYS.slice(0, -1));

  return (
    <thead>
      <tr>
        {weekDays.map((day) => (
          <StyledCell key={day}>{day}</StyledCell>
        ))}
      </tr>
    </thead>
  );
};

export default React.memo(TableHead);
