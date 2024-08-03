// export interface Subscription {
//   unobserve(): void;
// }

// export interface Subscriber<T> {
//   (value: T): void;
// }

// const entries = <T extends object, K extends keyof T>(value: T) => {
//   return Object.entries(value) as [K, T[K]][];
// };

// const keys = <T extends object, K extends keyof T>(value: T) => {
//   return Object.keys(value) as K[];
// };

// export const createState = <T extends object>(initialValue: T) => {
//   let state = initialValue;

//   const createSubscribers = <K extends keyof T>(values: T) => {
//     const subscribers = new Map<K, Set<Subscriber<T[K]>>>();
//     for (const key of Object.keys(values)) {
//       subscribers.set(key as K, new Set());
//     }
//     return subscribers;
//   };

//   const getSubscribers = <K extends keyof T>(key: K) => {
//     return subscribers.get(key) as Set<Subscriber<T[K]>>;
//   };

//   const subscribers = createSubscribers<keyof T>(initialValue);

//   const on = <K extends keyof T>(key: K, subscriber: Subscriber<T[K]>) => {
//     const list = getSubscribers(key).add(subscriber)
//     subscribers.set(key, list)
//   };
// };
