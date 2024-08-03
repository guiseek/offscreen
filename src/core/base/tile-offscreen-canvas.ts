import { BaseOffscreenCanvas } from "./base-offscreen-canvas";
import { createAsync } from "../../utils";

export abstract class TileOffscreenCanvas extends BaseOffscreenCanvas {
  #offscreens: BaseOffscreenCanvas[] = [];

  addOffscreen(...offscreens: BaseOffscreenCanvas[]) {
    this.#offscreens.push(...offscreens);
  }

  async draw() {
    const ctx = this.context;

    return createAsync<TileOffscreenCanvas>((resolve) => {
      if (ctx) {
        ctx.clearRect(0, 0, this.width, this.height);

        const draws$ = Promise.all(this.#offscreens.map((o) => o.draw()));

        draws$.then((offs) => {
          offs.map((o) => ctx.drawImage(o, o.position.x, o.position.y));
          resolve(this);
        });
      }
    });
  }
}
