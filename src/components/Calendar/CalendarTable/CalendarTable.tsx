import { useMemo } from 'react';

import getCalendarDates from '@/utils/helpers/getCalendarDates';

import DayCell from './DayCell/DayCell';
import StyledTable from './styled';
import TableHead from './TableHead/TableHead';

interface IComponentProps {
  date: Date;
}

const CalendarTable: React.FC<IComponentProps> = ({ date }) => {
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
    <StyledTable>
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
    </StyledTable>
  );
};

export default CalendarTable;
