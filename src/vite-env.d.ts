/// <reference types="vite/client" />

declare const app: HTMLDivElement;

interface GlobalEventHandlersEventMap {}

type IntrinsicElements = {
  [K in keyof HTMLElementTagNameMap]: (HTMLElementTagNameMap[K] & GlobalEventHandlers);
};

interface Window {
  canvasRafId: number
  canvas?: OffscreenCanvas
}