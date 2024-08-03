import { builtIn } from "../utils/built-in";

@builtIn("select", "background-control")
export class BackgroundControl extends HTMLSelectElement {
  connectedCallback() {
    this.setAttribute("name", "background");
  }

  setOptions(...items: string[][]) {
    for (const [text, value] of items) {
      this.add(new Option(text.replace(/.svg/, ""), value));
    }
  }
}
