import { useCallback, useState } from 'react';

import { ILocalStorageData, ITask } from '@/types/localStorage';
import {
  addTaskToLocalStorage,
  changeTaskPriorityStatus,
  deleteTaskFromLocalStorage,
  filterByPriority,
  formatDateToString,
  getLocalStorageData,
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
}

const List: React.FC<IComponentProps> = ({ date }) => {
  const setInitialTasks = (): ITask[] | null => {
    const localStorageData: ILocalStorageData | null = getLocalStorageData();
    if (!localStorageData) return null;

    const dayKey: string = formatDateToString(date);
    const dayTasks: ITask[] | undefined = localStorageData.tasks[dayKey];

    if (!dayTasks) return null;
    return filterByPriority(dayTasks);
  };

  const [tasks, setTasks] = useState<ITask[] | null>(setInitialTasks);
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
      setTasks((prevTasks) => filterByPriority(togglePriority(prevTasks!, taskId)));
    },
    [date],
  );

  const handleTaskDelete = useCallback(
    (taskId: number) => {
      deleteTaskFromLocalStorage(date, taskId);
      setTasks((prevTasks) => prevTasks!.filter(({ id }) => taskId !== id));
    },
    [date],
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
