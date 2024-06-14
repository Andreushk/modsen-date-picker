import { useMemo } from 'react';

import getCalendarDates from '@/utils/helpers/getCalendarDates';
import getParentDataAttribute from '@/utils/helpers/getParentDataAttribute';

import DayCell from './DayCell/DayCell';
import StyledTable from './styled';
import TableHead from './TableHead/TableHead';

interface IComponentProps {
  date: Date;
  selectedDate: string | null;
  onDateClick: (day: string) => void;
}

const CalendarTable: React.FC<IComponentProps> = ({ date, selectedDate, onDateClick }) => {
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

  const handleDayClick = (e: React.MouseEvent<HTMLElement>): void => {
    const clickedElement = e.target as HTMLElement;

    if (clickedElement) {
      const day: string | null = getParentDataAttribute(clickedElement, 'data-day');

      if (day) {
        onDateClick(day);
      }
    }
  };

  return (
    <StyledTable>
      <TableHead />
      <tbody onClick={handleDayClick}>
        {weeks.map((week, i) => (
          <tr key={i}>
            {week.map((weekDate) => {
              const isCurrentMonth = weekDate.getMonth() === date.getMonth();
              const isSelectedDay = Number(selectedDate?.slice(0, 2)) === weekDate.getDate();
              const isSelectedDayMonth = Number(selectedDate?.slice(4, 6)) - 1 === date.getMonth();
              const isSelectedDayYear = Number(selectedDate?.slice(6)) === date.getFullYear();

              return (
                <DayCell
                  key={weekDate.getDate()}
                  day={weekDate.getDate()}
                  disabled={!isCurrentMonth}
                  selected={isSelectedDay && isSelectedDayMonth && isSelectedDayYear}
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
