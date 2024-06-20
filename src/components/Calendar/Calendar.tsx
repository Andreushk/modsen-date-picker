import React, { useEffect, useMemo, useState } from 'react';

import theme from '@/styles/theme';
import { ILocalStorageData } from '@/types/localStorage';
import { generateCalendar, getLocalStorageData, setLocalStorageData } from '@/utils/helpers';

import Button from '../Button/Button';
import { IIntervalDates } from '../DatePicker/types';
import CalendarTable from './CalendarTable/CalendarTable';
import StyledContainer from './styled';
import TasksHint from './TasksHint/TasksHint';
import TitleWithControls from './TitleWithControls/TitleWithControls';

export const DATE_PICKER_CALENDAR_ID = 'date-picker-calendar';

const CANCEL_BUTTON_VALUE = 'Cancel';
interface IComponentProps {
  calendarDate: Date;
  selectedDate: string | null;
  interval: IIntervalDates;
  holidays: Date[] | null;
  withTasks: boolean;
  withOpeningAnimation: boolean;
  isStartsFromSunday: boolean;
  isWeeksCalendar: boolean;
  isWithWeekends: boolean;
  dateRestrictions: [Date, Date] | undefined;
  onDateClick: (day: string) => void;
  onDateChange: (newDate: Date) => void;
  onCancelClick: () => void;
}

const Calendar: React.FC<IComponentProps> = ({
  calendarDate,
  selectedDate,
  interval,
  holidays,
  withTasks,
  isStartsFromSunday,
  isWeeksCalendar,
  isWithWeekends,
  withOpeningAnimation,
  dateRestrictions,
  onDateClick,
  onDateChange,
  onCancelClick,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(!withOpeningAnimation);
  const [isTasksHintVisible, setIsTasksHintVisible] = useState<boolean>(false);

  useEffect((): void => {
    setIsVisible(true);
  }, []);

  useEffect((): void => {
    if (withTasks) {
      const localStorageData: ILocalStorageData | null = getLocalStorageData();

      if (!localStorageData || localStorageData.isFirstRun) {
        setIsTasksHintVisible(true);
        setLocalStorageData({ isFirstRun: false, tasks: {} });

        const indicatorAnimationDuration: number = Number.parseInt(theme.durations.slow);
        const hintOpacityChangeTime: number = Number.parseInt(theme.durations.quick);

        const timerId = setTimeout((): void => {
          setIsTasksHintVisible(false);
          clearTimeout(timerId);
        }, indicatorAnimationDuration + hintOpacityChangeTime);
      }
    }
  }, [withTasks]);

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

  const handleTasksHintClick = (): void => {
    setIsTasksHintVisible(false);
  };

  const isSomethingSelected: boolean = Boolean(
    selectedDate || interval.fromDate || interval.toDate,
  );

  return (
    <StyledContainer
      id={DATE_PICKER_CALENDAR_ID}
      data-testid={DATE_PICKER_CALENDAR_ID}
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
        holidays={holidays}
        withTasks={withTasks}
        isWithWeekends={isWithWeekends}
        isStartsFromSunday={isStartsFromSunday}
        dateRestrictions={dateRestrictions}
        onDateClick={onDateClick}
      />
      {isSomethingSelected && <Button onClick={onCancelClick}>{CANCEL_BUTTON_VALUE}</Button>}
      {isTasksHintVisible && <TasksHint onClick={handleTasksHintClick} />}
    </StyledContainer>
  );
};

export default React.memo(Calendar);
