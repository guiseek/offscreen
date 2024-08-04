import { BaseImageCanvas } from "./base";

export class BackgroundCanvas extends BaseImageCanvas {
  constructor(w = 1080, h = 1080, path: string, x = 0, y = 0) {
    super(w, h);
    this.position.set(x, y);
    this.image.src = path;
  }
}
