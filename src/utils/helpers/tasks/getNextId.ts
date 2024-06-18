import { ITask } from '@/types/localStorage';

const getNextId = (tasks: ITask[] | null) => {
  const lastTaskId: number | undefined = tasks ? tasks[0]?.id : 0;
  const nextTaskId: number = typeof lastTaskId === 'number' ? lastTaskId + 1 : 0;
  return nextTaskId;
};

export default getNextId;
