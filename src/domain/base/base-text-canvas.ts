import { BaseOffscreenCanvas } from "./base-offscreen-canvas";
import { createAsync } from "../../utils";

export abstract class BaseTextCanvas extends BaseOffscreenCanvas {
  text = "";

  fontWeight = "normal";
  fontSize = "24px";
  fontFamily = `Mukta`;

  async draw() {
    return createAsync<BaseTextCanvas>((resolve) => {
      const ctx = this.context;

      if (ctx) {
        ctx.clearRect(0, 0, this.width, this.height);

        ctx.fillStyle = "#FFFFFF";
        ctx.font = [this.fontWeight, this.fontSize, this.fontFamily].join(" ");

        ctx.fillText(this.text, this.position.x, this.position.y);

        resolve(this);
      }
    });
  }
}
