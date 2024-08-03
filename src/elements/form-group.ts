import { builtIn } from "../utils/built-in";

type FormControl = HTMLInputElement | HTMLSelectElement;

@builtIn("form", "form-group")
export class FormGroup<T = object> extends HTMLFormElement {
  addControl(...controls: FormControl[]) {
    this.append(...controls);
  }

  getValue() {
    return this.#fromData(new FormData(this)) as T;
  }

  #fromData(data: FormData) {
    return Object.fromEntries(data.entries());
  }
}
