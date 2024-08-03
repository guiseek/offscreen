import { Vector2 } from "../../math";

export abstract class BaseOffscreenCanvas extends OffscreenCanvas {
  position = new Vector2();

  #context: OffscreenCanvasRenderingContext2D | null = null;

  get context() {
    if (!this.#context) {
      this.#context = this.getContext("2d");
    }

    return this.#context;
  }

  abstract draw(): Promise<BaseOffscreenCanvas>;
}
