import React from 'react';

import getCalendarDates from '@/utils/helpers/getCalendarDates';

import DayCell from './DayCell/DayCell';
import StyledContainer from './styled';
import TableHead from './TableHead/TableHead';
import TitleWithControls from './TitleWithControls/TitleWithControls';

const Calendar: React.FC = () => {
  const today = new Date();
  const dates = getCalendarDates(today.getFullYear(), today.getMonth());

  const weeks: Array<Array<Date>> = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }

  return (
    <StyledContainer>
      <TitleWithControls monthIndex={today.getMonth()} year={today.getFullYear()} />
      <table>
        <TableHead />
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((date) => {
                const isCurrentMonth = date.getMonth() === today.getMonth();
                return (
                  <DayCell
                    key={date.getDate()}
                    day={date.getDate()}
                    disabled={!isCurrentMonth}
                    selected={false}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledContainer>
  );
};

export default React.memo(Calendar);
