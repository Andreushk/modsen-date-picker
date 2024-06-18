import { ITask } from '@/types/localStorage';

const togglePriority = (tasks: ITask[], taskId: number): ITask[] => {
  const changedPriorityTasks = tasks.map((task) => ({
    ...task,
    isImportant: taskId === task.id ? !task.isImportant : task.isImportant,
  }));
  return changedPriorityTasks;
};

export default togglePriority;
