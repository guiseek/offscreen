import { builtIn } from "../utils";

@builtIn("input", "place-control")
export class PlaceControl extends HTMLInputElement {
  connectedCallback() {
    this.setAttribute("name", "place");
    this.setAttribute("type", "text");

    this.setAttribute("value", "");

    this.setAttribute("placeholder", "Location");
  }
}
