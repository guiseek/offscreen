import { BaseTextCanvas } from "../base";

export class GroupNameCanvas extends BaseTextCanvas {
  constructor(w: number, h: number, name: string, x = 0, y = 0) {
    super(w, h);
    this.text = name;
    this.position.set(x, y);
  }
}
