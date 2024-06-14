import React from 'react';

import DAYS from '@/constants/days';

import StyledCell from './styled';

const TableHead: React.FC = () => (
  <thead>
    <tr>
      {DAYS.map((day) => (
        <StyledCell key={day}>{day}</StyledCell>
      ))}
    </tr>
  </thead>
);

export default React.memo(TableHead);
