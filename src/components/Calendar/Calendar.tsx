import React, { useMemo } from 'react';

import getCalendarDates from '@/utils/helpers/getCalendarDates';

import DayCell from './DayCell/DayCell';
import StyledContainer from './styled';
import TableHead from './TableHead/TableHead';
import TitleWithControls from './TitleWithControls/TitleWithControls';

interface IComponentProps {
  date: Date;
  onDateChange: (newDate: Date) => void;
}

const Calendar: React.FC<IComponentProps> = ({ date, onDateChange }) => {
  const calendarDates: Date[] = useMemo(
    () => getCalendarDates(date.getFullYear(), date.getMonth()),
    [date],
  );

  const weeks: Array<Array<Date>> = useMemo(() => {
    const result = [];

    for (let i = 0; i < calendarDates.length; i += 7) {
      result.push(calendarDates.slice(i, i + 7));
    }

    return result;
  }, [calendarDates]);

  return (
    <StyledContainer>
      <TitleWithControls
        month={date.getMonth()}
        year={date.getFullYear()}
        onDateSwitch={onDateChange}
      />
      <table>
        <TableHead />
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((weekDate) => {
                const isCurrentMonth = weekDate.getMonth() === date.getMonth();
                return (
                  <DayCell
                    key={weekDate.getDate()}
                    day={weekDate.getDate()}
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
