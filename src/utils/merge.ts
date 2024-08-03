import { Callback } from "../interfaces";

export function merge<T>(form: HTMLFormElement) {
  const watchers = new Set<Callback<T>>();

  const value = <T>(form: HTMLFormElement) => {
    const data = new FormData(form);
    return Object.fromEntries(data.entries()) as T;
  };

  form.addEventListener("change", () => {
    for (const watcher of watchers) {
      watcher(value<T>(form));
    }
  });

  return {
    subscribe(callback: Callback<T>) {
      watchers.add(callback);

      return {
        unsubscribe() {
          watchers.delete(callback);
        },
      };
    },
  };
}
