import { builtIn, formatDate } from "../utils";
import { BaseInputControl } from "./base";

@builtIn("input", "date-control")
export class DateControl extends BaseInputControl {
  connectedCallback() {
    const value = formatDate(new Date());
    this.config("date", "date", value);
  }

  get value() {
    return super.valueAsDate!.toISOString();
  }
}
