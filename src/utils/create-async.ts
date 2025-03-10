interface Reject {
  (reason?: Error | DOMException | null): void;
}

interface Resolve<T> {
  (value: T | PromiseLike<T>): void;
}

export interface AsyncCallback<T> {
  (resolve: Resolve<T>, reject: Reject): void;
}

export const createAsync = <T>(executor: AsyncCallback<T>) => {
  return new Promise<T>(executor);
};
