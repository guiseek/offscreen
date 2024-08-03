import { BaseOffscreenCanvas } from "./base-offscreen-canvas";
import { createAsync } from "../../utils";

export abstract class ImageOffscreenCanvas extends BaseOffscreenCanvas {
  image = new Image(this.width, this.width);

  async draw() {
    return createAsync<ImageOffscreenCanvas>((resolve) => {
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
