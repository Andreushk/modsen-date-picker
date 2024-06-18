export interface ITask {
  id: number;
  date: Date;
  value: string;
  isImportant: boolean;
}

export interface ILocalStorageTasksObject {
  [key: string]: ITask[];
}

export interface ILocalStorageData {
  tasks: ILocalStorageTasksObject;
  isFirstRun: boolean;
}
