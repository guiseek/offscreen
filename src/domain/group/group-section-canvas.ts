import { BaseContainerCanvas } from "../base";

export class GroupSectionCanvas extends BaseContainerCanvas {
  constructor(w = 1080, h = 180, public order = 0) {
    super(w, h);
  }
}
