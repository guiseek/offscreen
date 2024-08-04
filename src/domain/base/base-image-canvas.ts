import { createAsync } from "../../utils";
import { BaseOffscreenCanvas } from "./base-offscreen-canvas";

export abstract class BaseImageCanvas extends BaseOffscreenCanvas {
  image = new Image(this.width, this.width);

  async draw() {
    return createAsync<BaseImageCanvas>((resolve) => {
      const ctx = this.context;

      if (ctx) {
        ctx.clearRect(0, 0, this.width, this.height);

        this.image.onload = () => {
          ctx.drawImage(this.image, 0, 0);

          resolve(this);
        };
      }
    });
  }
}
