export const autonomous = (tag: `${string}:${string}`) => {
  return <T extends CustomElementConstructor>(target: T) => {
    customElements.define(tag, target);
  };
};
