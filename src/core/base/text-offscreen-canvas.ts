import { BaseOffscreenCanvas } from "./base-offscreen-canvas";
import { createAsync } from "../../utils";

export abstract class TextOffscreenCanvas extends BaseOffscreenCanvas {
  text = "";
  size = "24px";
  weight = "";

  font = `Mukta`;

  async draw() {
    return createAsync<TextOffscreenCanvas>((resolve) => {
      const ctx = this.context;

      if (ctx) {
        ctx.clearRect(0, 0, this.width, this.height);

        ctx.fillStyle = "#FFFFFF";
        ctx.font = [this.weight, this.size, this.font].join(" ");

        ctx.fillText(this.text, this.position.x, this.position.y);

        resolve(this);
      }
    });
  }
}
