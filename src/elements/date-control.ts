import { builtIn, formatDate } from "../utils";

@builtIn("input", "date-control")
export class DateControl extends HTMLInputElement {
  connectedCallback() {
    this.setAttribute("name", "date");
    this.setAttribute("type", "date");

    const value = formatDate(new Date());
    this.setAttribute("value", value);
  }

  get value() {
    return super.valueAsDate!.toISOString();
  }
}
