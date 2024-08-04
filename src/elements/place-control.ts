import { builtIn } from "../utils";
import { BaseInputControl } from "./base";

@builtIn("input", "place-control")
export class PlaceControl extends BaseInputControl {
  connectedCallback() {
    this.config("text", "place");
    this.setAttribute("placeholder", "Location");
  }
}
