export type InputType = "text" | "date" | "time" | "number";

export abstract class BaseInputControl extends HTMLInputElement {
  config(type: InputType, name: string, value = "") {
    this.setAttribute("type", type);
    this.setAttribute("name", name);
    this.setAttribute("value", value);
  }
}
