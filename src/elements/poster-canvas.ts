import { BaseOffscreenCanvas } from "../core";
import { createAsync } from "../utils";
import { builtIn } from "../utils/built-in";

@builtIn("canvas", "poster-canvas")
export class PosterCanvas extends HTMLCanvasElement {
  #offscreens: BaseOffscreenCanvas[] = [];

  #context!: CanvasRenderingContext2D;

  connectedCallback() {
    this.#context = this.getContext("2d")!;
    this.setAttribute("id", "poster");
  }

  addOffscreen(...offscreens: BaseOffscreenCanvas[]) {
    this.#offscreens.push(...offscreens);
  }

  async execute() {
    this.#context.clearRect(0, 0, this.width, this.height);

    return createAsync<void>((resolve) => {
      const draws$ = Promise.all(this.#offscreens.map((o) => o.draw()));

      draws$.then((offs) => {
        console.log(offs);
        offs.map((o) => this.#context.drawImage(o, o.position.x, o.position.y));

        resolve();
      });
    });
  }
}
