import { builtIn } from "../utils";
import { BaseInputControl } from "./base";

@builtIn("input", "time-control")
export class TimeControl extends BaseInputControl {
  connectedCallback() {
    this.config("time", "time", "19:00");
  }

  get value() {
    return super.valueAsDate!.toISOString();
  }
}
