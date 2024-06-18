import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import { Tasks } from '@/components';
import useLongPress from '@/hooks/useLongPress';

import StyledCell, { DayCellTypes } from './styled';

interface IComponentProps {
  date: Date;
  disabled: boolean;
  variant: DayCellTypes;
  isWeekend: boolean;
  isHoliday: boolean;
}

const DayCell: React.FC<IComponentProps> = ({ date, disabled, variant, isWeekend, isHoliday }) => {
  const [isTasksOpen, setIsTasksOpen] = useState<boolean>(false);
  const container: HTMLElement | null = document.getElementById('date-picker-calendar');

  const handleTasksClose = (): void => {
    setIsTasksOpen(false);
  };

  const handleTasksOpen = (): void => {
    setIsTasksOpen(true);
  };

  const events = useLongPress(handleTasksOpen, 200);

  return (
    <>
      <StyledCell
        {...events}
        data-day={disabled ? null : date.getDate()}
        $disabled={disabled}
        $variant={variant}
        $isHoliday={isHoliday}
        $isWeekend={isWeekend}
      >
        {date.getDate()}
      </StyledCell>
      {isTasksOpen &&
        container &&
        createPortal(<Tasks date={date} onClose={handleTasksClose} />, container)}
    </>
  );
};

export default React.memo(DayCell);
