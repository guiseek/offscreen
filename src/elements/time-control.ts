import { builtIn } from "../utils";

@builtIn("input", "time-control")
export class TimeControl extends HTMLInputElement {
  connectedCallback() {
    this.setAttribute("name", "time");
    this.setAttribute("type", "time");
    this.setAttribute("value", '19:00');
  }

  get value() {
    return super.valueAsDate!.toISOString();
  }
}
