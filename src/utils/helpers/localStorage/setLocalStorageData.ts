import { LOCAL_STORAGE_KEY } from '@/constants/localStorage';
import { ILocalStorageData } from '@/types/localStorage';

const setLocalStorageData = (data: ILocalStorageData): void => {
  const serializedData: string = JSON.stringify(data);
  localStorage.setItem(LOCAL_STORAGE_KEY, serializedData);
};

export default setLocalStorageData;
