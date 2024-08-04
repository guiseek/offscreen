import { builtIn, create } from "../utils";
import { BaseInputControl } from "./base";

@builtIn("span", "label-for-control")
export class LabelForControl extends HTMLLabelElement {
  addControl(textContent: string, control: BaseInputControl) {
    const span = create("span", { textContent });
    this.append(span, control);
  }
}
