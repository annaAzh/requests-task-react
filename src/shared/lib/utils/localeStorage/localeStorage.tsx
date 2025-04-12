export const getLocaleStorage = <T,>(key: string): T[] => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data) as T[];
  }
  return [];
};

export const setLocaleStorage = <T,>(key: string, value: T[]): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
