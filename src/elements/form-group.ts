import { builtIn, formValue } from "../utils";

type FormControl = HTMLInputElement | HTMLSelectElement;

@builtIn("form", "form-group")
export class FormGroup<T = object> extends HTMLFormElement {
  addControl(...controls: FormControl[]) {
    this.append(...controls);
  }

  get value() {
    return formValue<T>(this);
  }
}
