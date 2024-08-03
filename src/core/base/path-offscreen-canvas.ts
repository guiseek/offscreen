import { createAsync } from "../../utils";
import { BaseOffscreenCanvas } from "./base-offscreen-canvas";

export abstract class PathOffscreenCanvas extends BaseOffscreenCanvas {
  path = new Path2D();

  async draw() {
    return createAsync<PathOffscreenCanvas>((resolve) => {
      const ctx = this.context;
      console.log(ctx);
      
      if (ctx) {
        this.context.clearRect(0, 0, this.width, this.height);

        this.context.strokeStyle = "#62F77225";

        this.path.rect(0, 0, this.width, this.height);
        this.context.stroke(this.path);
      }

      resolve(this);
    });
  }
}
