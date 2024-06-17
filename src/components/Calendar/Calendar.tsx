import React, { useEffect, useMemo, useState } from 'react';

import { generateCalendar } from '@/utils/helpers';

import { IIntervalDates } from '../DatePicker/types';
import CalendarTable from './CalendarTable/CalendarTable';
import CancelButton from './CancelButton/CancelButton';
import StyledContainer from './styled';
import TitleWithControls from './TitleWithControls/TitleWithControls';

interface IComponentProps {
  calendarDate: Date;
  selectedDate: string | null;
  interval: IIntervalDates;
  withOpeningAnimation: boolean;
  isStartsFromSunday: boolean;
  isWeeksCalendar: boolean;
  dateRestrictions: [Date, Date] | undefined;
  onDateClick: (day: string) => void;
  onDateChange: (newDate: Date) => void;
  onCancelClick: () => void;
}

const Calendar: React.FC<IComponentProps> = ({
  calendarDate,
  selectedDate,
  interval,
  isStartsFromSunday,
  isWeeksCalendar,
  withOpeningAnimation,
  dateRestrictions,
  onDateClick,
  onDateChange,
  onCancelClick,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(!withOpeningAnimation);

  useEffect((): void => {
    setIsVisible(true);
  }, []);

  const calendarDates: Date[] = useMemo(
    (): Date[] =>
      generateCalendar(isWeeksCalendar ? 'week' : 'month', calendarDate, isStartsFromSunday),
    [calendarDate, isStartsFromSunday, isWeeksCalendar],
  );

  const calendarWeeksData: Date[][] = useMemo((): Date[][] => {
    const weeksArray = [];

    if (!isWeeksCalendar) {
      for (let i = 0; i < calendarDates.length; i += 7) {
        weeksArray.push(calendarDates.slice(i, i + 7));
      }
    } else {
      weeksArray.push(calendarDates);
    }

    return weeksArray;
  }, [calendarDates, isWeeksCalendar]);

  const handleCalendarClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const isSomethingSelected: boolean = Boolean(
    selectedDate || interval.fromDate || interval.toDate,
  );

  return (
    <StyledContainer
      $isVisible={isVisible}
      $isWithCancelButton={isSomethingSelected}
      onClick={handleCalendarClick}
    >
      <TitleWithControls
        calendarDate={calendarDate}
        restrictions={dateRestrictions}
        isWeeksCalendar={isWeeksCalendar}
        onDateSwitch={onDateChange}
      />
      <CalendarTable
        calendarData={calendarWeeksData}
        calendarDate={calendarDate}
        selectedDate={selectedDate}
        interval={interval}
        isStartsFromSunday={isStartsFromSunday}
        dateRestrictions={dateRestrictions}
        onDateClick={onDateClick}
      />
      {isSomethingSelected && <CancelButton onClick={onCancelClick} />}
    </StyledContainer>
  );
};

export default React.memo(Calendar);
