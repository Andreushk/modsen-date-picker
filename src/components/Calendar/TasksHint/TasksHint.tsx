import { useEffect, useState } from 'react';

import theme from '@/styles/theme';

import Indicator from './Indicator/Indicator';
import Information from './Information/Information';
import StyledContainer from './styled';

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
    <StyledContainer $visible={isVisible} onClick={onClick}>
      <Indicator />
      <Information />
    </StyledContainer>
  );
};

export default TasksHint;
