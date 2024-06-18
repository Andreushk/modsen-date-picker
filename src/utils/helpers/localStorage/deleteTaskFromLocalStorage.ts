import { NO_LOCAL_STORAGE_DATA_ERROR } from '@/constants/localStorage';
import { ILocalStorageData, ITask } from '@/types/localStorage';

import formatDateToString from '../dates/formatDateToString';
import getLocalStorageData from './getLocalStorageData';
import setLocalStorageData from './setLocalStorageData';

const deleteTaskFromLocalStorage = (date: Date, taskId: number): void => {
  const localStorageData: ILocalStorageData | null = getLocalStorageData();

  if (!localStorageData) {
    throw new Error(NO_LOCAL_STORAGE_DATA_ERROR);
  }

  const keyForDateTasks: string = formatDateToString(date);
  const dateTasks: ITask[] = localStorageData.tasks[keyForDateTasks]!;

  const filteredDateTasks: ITask[] = dateTasks.filter(({ id }) => id !== taskId);
  const newLocalStorageData: ILocalStorageData = {
    ...localStorageData,
    tasks: { ...localStorageData.tasks, [keyForDateTasks]: filteredDateTasks },
  };

  setLocalStorageData(newLocalStorageData);
};

export default deleteTaskFromLocalStorage;
