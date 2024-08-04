import { BaseImageCanvas } from "../base";

export class GroupLogoCanvas extends BaseImageCanvas {
  constructor(w = 128, h = 128, path: string, x = 0, y = 0) {
    super(w, h);
    this.image.src = path;
    this.position.set(x, y);
  }
}
