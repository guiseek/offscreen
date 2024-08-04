import { SpeakerRowCanvas } from "./speaker-row-canvas";
import { BaseContainerCanvas } from "../base";
import { Vector2 } from "../../math";

export class SpeakerSectionCanvas extends BaseContainerCanvas {
  gutters = new Vector2();

  constructor(w = 1080, h = 540, gx = 80, gy = 40, public order = 1) {
    super(w, h);
    this.gutters.set(gx, gy);
  }

  addSpeaker(speaker: SpeakerRowCanvas) {
    //
  }
}
