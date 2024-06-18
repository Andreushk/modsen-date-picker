import { LOCAL_STORAGE_KEY } from '@/constants/localStorage';
import { ILocalStorageData } from '@/types/localStorage';

const getLocalStorageData = (): ILocalStorageData | null => {
  const serializedData: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (serializedData === null) {
    return null;
  }

  const data: ILocalStorageData = JSON.parse(serializedData);
  return data;
};

export default getLocalStorageData;
