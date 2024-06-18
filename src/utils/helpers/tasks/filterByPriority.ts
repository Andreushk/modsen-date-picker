import { ITask } from '@/types/localStorage';

const filterByPriority = (tasks: ITask[]): ITask[] => {
  const sortedTasks: ITask[] = tasks.sort((a: ITask, b: ITask) => {
    if (a.isImportant && !b.isImportant) return -1;
    if (!a.isImportant && b.isImportant) return 1;
    return 0;
  });

  return sortedTasks;
};

export default filterByPriority;
