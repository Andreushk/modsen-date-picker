import { useEffect, useState } from 'react';

import theme from '@/styles/theme';

import Indicator from './Indicator/Indicator';
import Information from './Information/Information';
import StyledContainer from './styled';

export const TASKS_HINT_TEST_ID = 'date-picker-tasks-hint';

interface IComponentProps {
  onClick: () => void;
}

const TasksHint: React.FC<IComponentProps> = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect((): void => {
    const timerId: NodeJS.Timeout = setTimeout((): void => {
      setIsVisible(false);
      clearTimeout(timerId);
    }, Number.parseInt(theme.durations.slow));
  }, []);

  return (
    <StyledContainer $visible={isVisible} onClick={onClick} data-testid={TASKS_HINT_TEST_ID}>
      <Indicator />
      <Information />
    </StyledContainer>
  );
};

export default TasksHint;
