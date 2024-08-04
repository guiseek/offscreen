import { BaseContainerCanvas } from "../base";

export class SpeakerRowCanvas extends BaseContainerCanvas {
  constructor(w = 1080, h = 270, public order = 0) {
    super(w, h);
  }
}
