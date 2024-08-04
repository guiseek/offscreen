import { builtIn } from "../utils/built-in";
import { BaseSelectControl } from "./base";

@builtIn("select", "group-control")
export class GroupControl extends BaseSelectControl {
  groups = [
    { ref: "admin", name: "Organização" },
    { ref: "avisos", name: "Avisos" },
    { ref: "agile", name: "Agile" },
    { ref: "curitiba", name: "Curitiba" },
    { ref: "delphi", name: "Delphi" },
    { ref: "geral", name: "Geral" },
    { ref: "nodejs", name: "NodeJS" },
    { ref: "php", name: "PHP" },
    { ref: "rust", name: "Rust" },
    { ref: "ts", name: "TypeScript" },
    { ref: "vagas", name: "Vagas" },
  ];

  connectedCallback() {
    this.setAttribute("name", "group");

    for (const { ref, name } of this.groups) {
      this.add(new Option(name, ref));
    }

    if (this.firstElementChild instanceof HTMLOptionElement) {
      this.firstElementChild.selected = true;
    }
  }
}
