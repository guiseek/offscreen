export const entries = <T extends object, K extends keyof T>(values: T) => {
  return Object.entries(values) as [K, T[K]][];
};
