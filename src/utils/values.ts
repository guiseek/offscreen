export const values = <T extends object, K extends keyof T>(values: T) => {
  return Object.values(values) as T[K][];
};
