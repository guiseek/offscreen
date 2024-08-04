import { builtIn } from "../utils/built-in";
import { BaseSelectControl } from "./base";

@builtIn("select", "background-control")
export class BackgroundControl extends BaseSelectControl {
  backgrounds = [
    ["Github timeline", "github-timeline-shadow"],
    ["Bermuda circle", "bermuda-circle-shadow"],
    ["Dragon scales", "dragon-scales"],
    ["Endless constellation", "endless-constellation"],
    ["Liquid cheese", "liquid-cheese"],
    ["Wintery sunburst", "wintery-sunburst-shadow"],
  ];

  connectedCallback() {
    this.setAttribute("name", "background");

    for (const [name, ref] of this.backgrounds) {
      this.add(new Option(name, ref));
    }

    if (this.firstElementChild instanceof HTMLOptionElement) {
      this.firstElementChild.selected = true;
    }
  }
}
