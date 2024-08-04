import { builtIn, create } from "../utils";
import { SaveAsDialog } from "./save-as-dialog";

@builtIn("button", "download-button")
export class DownloadButton extends HTMLButtonElement {
  static get observedAttributes() {
    return ["canvasId"];
  }

  _canvasId = "";

  set canvasId(id) {
    this._canvasId = id;
  }

  get canvasId() {
    return this._canvasId;
  }

  connectedCallback() {
    this.setAttribute("type", "button");
    const text = new Text("Download");
    this.append(text);

    this.ariaBusy = "false";
    this.ariaLabel = "Download";

    this.onclick = () => {
      this.ariaBusy = "true";
      this.ariaLabel = "Please wait...";

      console.log(`#${this.canvasId}`);

      const canvas = document.body.querySelector<HTMLCanvasElement>(
        `#${this.canvasId}`
      );
      if (!canvas) throw `Canvas not found`;

      const dialog = new SaveAsDialog();
      document.body.append(dialog);

      dialog.onclose = () => {
        if (dialog.returnValue) {
          canvas.toBlob((blob) => {
            if (blob) {
              console.log(blob);

              const href = URL.createObjectURL(blob);
              const download = `${dialog.returnValue}.png`;
              const link = create("a", { href, download });

              link.onclick = () => {
                setTimeout(() => {
                  URL.revokeObjectURL(href);
                  this.ariaBusy = "false";
                  this.ariaLabel = "Download";
                }, 1000);
              };

              link.click();
            }
          });
        }
      };
    };
  }

  attributeChangedCallback(name: "canvasId", prev?: string, next?: string) {
    console.log(name, prev, next);

    if (name === "canvasId" && next && prev !== next) {
      this.canvasId = next;
    }
  }
}
