import { builtIn } from "../utils";

@builtIn("input", "date-control")
export class DateControl extends HTMLInputElement {
  connectedCallback() {
    this.setAttribute("type", "date");
    this.setAttribute("step", "3600");
  }

  getValue() {
    return this.valueAsDate;
  }
}
