import React, { useMemo } from 'react';

import { IIntervalDates } from '@/components/DatePicker/types';
import {
  checkIsSameDate,
  formatDateToString,
  formatStringToDate,
  getCalendarDates,
  getParentDataAttribute,
} from '@/utils/helpers';

import DayCell from './DayCell/DayCell';
import { DayCellTypes } from './DayCell/styled';
import StyledTable from './styled';
import TableHead from './TableHead/TableHead';

interface IComponentProps {
  calendarDate: Date;
  selectedDate: string | null;
  interval: IIntervalDates;
  dateRestrictions: [Date, Date] | undefined;
  onDateClick: (day: string) => void;
}

const CalendarTable: React.FC<IComponentProps> = ({
  calendarDate,
  selectedDate,
  interval,
  dateRestrictions,
  onDateClick,
}) => {
  const calendarDates: Date[] = useMemo(
    (): Date[] => getCalendarDates(calendarDate.getFullYear(), calendarDate.getMonth()),
    [calendarDate],
  );

  const weeks: Date[][] = useMemo((): Date[][] => {
    const weeksArray = [];

    for (let i = 0; i < calendarDates.length; i += 7) {
      weeksArray.push(calendarDates.slice(i, i + 7));
    }

    return weeksArray;
  }, [calendarDates]);

  const from: Date | null = useMemo(
    () => (interval.fromDate ? formatStringToDate(interval.fromDate) : null),
    [interval],
  );

  const to: Date | null = useMemo(
    () => (interval.toDate ? formatStringToDate(interval.toDate) : null),
    [interval],
  );

  const isRestrictedDate = (weekDate: Date): boolean => {
    if (!dateRestrictions) return false;
    const [fromRestriction, toRestriction] = dateRestrictions;
    return !(weekDate >= fromRestriction && weekDate <= toRestriction);
  };

  const getCellStatus = (weekDate: Date): DayCellTypes => {
    if (!selectedDate && !from && !to) return 'default';

    if (selectedDate) {
      const isSelectedDay = Number(selectedDate?.slice(0, 2)) === weekDate.getDate();
      const isSelectedDayMonth = Number(selectedDate?.slice(4, 6)) - 1 === calendarDate.getMonth();
      const isSelectedDayYear = Number(selectedDate?.slice(6)) === calendarDate.getFullYear();
      return isSelectedDay && isSelectedDayMonth && isSelectedDayYear ? 'selected' : 'default';
    }

    if (from && checkIsSameDate(weekDate, from)) return 'starting';
    if (to && checkIsSameDate(weekDate, to)) return 'ending';
    if (from && to && weekDate > from && weekDate < to) return 'inRange';
    return 'default';
  };

  const handleDayClick = (e: React.MouseEvent<HTMLElement>): void => {
    const clickedElement = e.target as HTMLElement;

    if (clickedElement) {
      const day: string | null = getParentDataAttribute(clickedElement, 'data-day');
      if (day) onDateClick(formatDateToString(day, calendarDate));
    }
  };

  return (
    <StyledTable>
      <TableHead />
      <tbody onClick={handleDayClick}>
        {weeks.map((week, i) => (
          <tr key={i}>
            {week.map((weekDate) => {
              const isCurrentMonth: boolean = weekDate.getMonth() === calendarDate.getMonth();
              const isOverDateRestriction: boolean = isRestrictedDate(weekDate);
              const dayCellVariant: DayCellTypes = getCellStatus(weekDate);
              return (
                <DayCell
                  key={weekDate.getDate()}
                  day={weekDate.getDate()}
                  variant={dayCellVariant}
                  disabled={!isCurrentMonth || isOverDateRestriction}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default React.memo(CalendarTable);
