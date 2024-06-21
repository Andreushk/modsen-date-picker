import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import { Tasks } from '@/components';
import useLongPress from '@/hooks/useLongPress';
import { ILocalStorageData, ITask } from '@/types/localStorage';
import { filterByPriority, formatDateToString, getLocalStorageData } from '@/utils/helpers';

import { DayCellTypes, StyledCell, StyledTasksIndicator } from './styled';

export const SELECTED_DAY_TEST_ID = 'date-picker-selected-day';

interface IComponentProps {
  date: Date;
  disabled: boolean;
  variant: DayCellTypes;
  isWeekend: boolean;
  isHoliday: boolean;
  isWithTasks: boolean;
}

const DayCell: React.FC<IComponentProps> = ({
  date,
  disabled,
  variant,
  isWeekend,
  isHoliday,
  isWithTasks,
}) => {
  const setInitialTasks = (): ITask[] | null => {
    const localStorageData: ILocalStorageData | null = getLocalStorageData();
    if (!localStorageData) return null;

    const dayKey: string = formatDateToString(date);
    const dayTasks: ITask[] | undefined = localStorageData.tasks[dayKey];

    if (!dayTasks || dayTasks.length === 0) return null;
    return filterByPriority(dayTasks);
  };

  const [dayTasks, setDayTasks] = useState<ITask[] | null>(setInitialTasks);
  const [isTasksOpen, setIsTasksOpen] = useState<boolean>(false);
  const container: HTMLElement | null = document.getElementById('date-picker-calendar');

  const handleCloseTasksWindow = (): void => {
    setIsTasksOpen(false);
  };

  const handleOpenTasksWindow = (): void => {
    setIsTasksOpen(true);
  };

  const { onMouseDown, onMouseUp, onTouchStart, onTouchEnd } = useLongPress(
    handleOpenTasksWindow,
    200,
  );

  return (
    <>
      <StyledCell
        data-day={disabled ? null : date.getDate()}
        $disabled={disabled}
        $variant={variant}
        $isHoliday={isHoliday}
        $isWeekend={isWeekend}
        onMouseDown={isWithTasks ? onMouseDown : undefined}
        onMouseUp={isWithTasks ? onMouseUp : undefined}
        onTouchStart={isWithTasks ? onTouchStart : undefined}
        onTouchEnd={isWithTasks ? onTouchEnd : undefined}
        data-testid={variant === 'selected' ? SELECTED_DAY_TEST_ID : null}
      >
        {date.getDate()}
        {dayTasks && dayTasks.length > 0 && <StyledTasksIndicator />}
      </StyledCell>
      {isTasksOpen &&
        container &&
        createPortal(
          <Tasks
            date={date}
            tasks={dayTasks}
            setTasks={setDayTasks}
            onClose={handleCloseTasksWindow}
          />,
          container,
        )}
    </>
  );
};

export default React.memo(DayCell);
