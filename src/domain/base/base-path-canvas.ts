import { BaseOffscreenCanvas } from "./base-offscreen-canvas";
import { createAsync } from "../../utils";

export abstract class BasePathCanvas extends BaseOffscreenCanvas {
  path = new Path2D();

  async draw() {
    return createAsync<BasePathCanvas>((resolve) => {
      const ctx = this.context;
      console.log(ctx);

      if (ctx) {
        this.context.clearRect(0, 0, this.width, this.height);

        this.context.strokeStyle = "#62F772";

        this.path.rect(0, 0, this.width, this.height);
        this.context.stroke(this.path);
      }

      resolve(this);
    });
  }
}
