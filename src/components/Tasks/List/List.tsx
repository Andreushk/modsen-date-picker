import { useCallback, useState } from 'react';

import { ITask } from '@/types/localStorage';
import {
  addTaskToLocalStorage,
  changeTaskPriorityStatus,
  deleteTaskFromLocalStorage,
  filterByPriority,
  getNextId,
  togglePriority,
} from '@/utils/helpers';

import AddButton from './AddButton/AddButton';
import NoTasks from './NoTasks/NoTasks';
import { StyledContainer, StyledScrollableContainer } from './styled';
import Task from './Task/Task';
import TaskInput from './TaskInput/TaskInput';

export const TASKS_LIST_TEST_ID = 'date-picker-tasks-list';

interface IComponentProps {
  date: Date;
  tasks: ITask[] | null;
  setTasks: (newTasks: ITask[]) => void;
}

const List: React.FC<IComponentProps> = ({ date, tasks, setTasks }) => {
  const [isTaskInputOpen, setIsTaskInputOpen] = useState<boolean>(false);

  const handleNewTask = (taskValue: string): void => {
    const task: ITask = { id: getNextId(tasks), date, value: taskValue, isImportant: false };

    const tasksArray: ITask[] = tasks ? [task, ...tasks] : [task];
    const sortedTasksArray: ITask[] = filterByPriority(tasksArray);

    addTaskToLocalStorage(date, task);
    setIsTaskInputOpen(false);
    setTasks(sortedTasksArray);
  };

  const handleInputClose = (): void => {
    setIsTaskInputOpen(false);
  };

  const handleAddButtonClick = useCallback((): void => {
    setIsTaskInputOpen(true);
  }, []);

  const handleTaskPriority = useCallback(
    (taskId: number) => {
      changeTaskPriorityStatus(date, taskId);
      setTasks(filterByPriority(togglePriority(tasks!, taskId)));
    },
    [date, tasks, setTasks],
  );

  const handleTaskDelete = useCallback(
    (taskId: number) => {
      deleteTaskFromLocalStorage(date, taskId);
      setTasks(tasks!.filter(({ id }) => taskId !== id));
    },
    [date, tasks, setTasks],
  );

  return (
    <StyledScrollableContainer>
      {(!tasks || tasks.length === 0) && <NoTasks />}
      {tasks && tasks.length > 0 && (
        <StyledContainer data-testid={TASKS_LIST_TEST_ID}>
          {tasks.map(({ id, value, isImportant }) => (
            <Task
              key={id}
              id={id}
              value={value}
              isImportant={isImportant}
              onPriority={handleTaskPriority}
              onDelete={handleTaskDelete}
            />
          ))}
        </StyledContainer>
      )}
      {isTaskInputOpen && <TaskInput onClose={handleInputClose} onTaskSave={handleNewTask} />}
      {!isTaskInputOpen && <AddButton onClick={handleAddButtonClick} />}
    </StyledScrollableContainer>
  );
};

export default List;
