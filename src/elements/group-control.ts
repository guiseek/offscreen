import { builtIn } from "../utils/built-in";

@builtIn("select", "group-control")
export class GroupControl extends HTMLSelectElement {
  connectedCallback() {
    this.setAttribute("name", "group");
    
    if (this.firstElementChild instanceof HTMLOptionElement) {
      this.firstElementChild.selected = true;
    }
  }

  setOptions(...items: string[][]) {
    for (const [text, value] of items) {
      this.add(new Option(text.replace(/.svg/, ""), value));
    }
  }

  normalizeName(value: string) {
    return value.replace(/group\//, "").replace(/.svg/, "");
  }
}
