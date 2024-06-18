import { NO_LOCAL_STORAGE_DATA_ERROR } from '@/constants/localStorage';
import { ILocalStorageData, ITask } from '@/types/localStorage';

import formatDateToString from '../dates/formatDateToString';
import togglePriority from '../tasks/togglePriority';
import getLocalStorageData from './getLocalStorageData';
import setLocalStorageData from './setLocalStorageData';

const changeTaskPriorityStatus = (date: Date, taskId: number) => {
  const localStorageData: ILocalStorageData | null = getLocalStorageData();

  if (!localStorageData) {
    throw new Error(NO_LOCAL_STORAGE_DATA_ERROR);
  }

  const keyForDateTasks: string = formatDateToString(date);
  const dateTasks: ITask[] = localStorageData.tasks[keyForDateTasks]!;

  const newLocalStorageData: ILocalStorageData = {
    ...localStorageData,
    tasks: { ...localStorageData.tasks, [keyForDateTasks]: togglePriority(dateTasks, taskId) },
  };

  setLocalStorageData(newLocalStorageData);
};

export default changeTaskPriorityStatus;
