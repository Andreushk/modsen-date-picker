import { NO_LOCAL_STORAGE_DATA_ERROR } from '@/constants/localStorage';
import { ILocalStorageData, ITask } from '@/types/localStorage';

import formatDateToString from '../dates/formatDateToString';
import getLocalStorageData from './getLocalStorageData';
import setLocalStorageData from './setLocalStorageData';

const addTaskToLocalStorage = (date: Date, task: ITask): void => {
  const localStorageData: ILocalStorageData | null = getLocalStorageData();

  if (!localStorageData) {
    throw new Error(NO_LOCAL_STORAGE_DATA_ERROR);
  }

  const keyForDateTasks: string = formatDateToString(date);
  const dateTasks: ITask[] = localStorageData.tasks[keyForDateTasks] || [];

  const newDateTasks: ITask[] = [...dateTasks, task];
  const newLocalStorageData: ILocalStorageData = {
    ...localStorageData,
    tasks: { ...localStorageData.tasks, [keyForDateTasks]: newDateTasks },
  };

  setLocalStorageData(newLocalStorageData);
};

export default addTaskToLocalStorage;
