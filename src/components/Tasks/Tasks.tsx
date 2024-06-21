import { ITask } from '@/types/localStorage';

import Button from '../Button/Button';
import List from './List/List';
import StyledContainer from './styled';
import TitlePart from './TitlePart/TitlePart';

export const TASKS_WINDOW_TEST_ID = 'date-picker-tasks-window';
export const CLOSE_BUTTON_VALUE = 'Close';

interface IComponentProps {
  date: Date;
  tasks: ITask[] | null;
  setTasks: (newTasks: ITask[]) => void;
  onClose: () => void;
}

const Tasks: React.FC<IComponentProps> = ({ date, tasks, setTasks, onClose }) => (
  <StyledContainer data-testid={TASKS_WINDOW_TEST_ID}>
    <TitlePart date={date} />
    <List date={date} tasks={tasks} setTasks={setTasks} />
    <Button onClick={onClose}>{CLOSE_BUTTON_VALUE}</Button>
  </StyledContainer>
);

export default Tasks;
