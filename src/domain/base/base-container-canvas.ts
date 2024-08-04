import { createAsync } from "../../utils";
import { BaseOffscreenCanvas } from "./base-offscreen-canvas";

export abstract class BaseContainerCanvas extends BaseOffscreenCanvas {
  #children: BaseOffscreenCanvas[] = [];

  add(...offscreens: BaseOffscreenCanvas[]) {
    this.#children.push(...offscreens);
  }

  async draw() {
    const ctx = this.context;

    return createAsync<BaseContainerCanvas>((resolve) => {
      if (ctx) {
        ctx.clearRect(0, 0, this.width, this.height);

        const draws$ = Promise.all(this.#children.map((o) => o.draw()));

        draws$.then((offs) => {
          offs.map((o) => ctx.drawImage(o, o.position.x, o.position.y));
          resolve(this);
        });
      }
    });
  }
}
