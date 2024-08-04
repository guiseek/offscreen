import { builtIn, create } from "../utils";

@builtIn("dialog", "save-as-dialod")
export class SaveAsDialog extends HTMLDialogElement {
  connectedCallback() {
    document.documentElement.classList.toggle("modal-is-open");

    this.open = true;

    const textContent = "save as...";
    const heading = create("h2", { textContent });

    const input = create("input", { name: "download" });

    const cancel = create("button", {
      className: "secondary",
      textContent: "Cancel",
    });
    const save = create("button", {
      textContent: "Save",
    });
    const footer = create("footer", {}, cancel, save);

    const article = create("article", {}, heading, input, footer);

    this.append(article);

    save.onclick = () => {
      document.documentElement.classList.toggle("modal-is-open");
      this.close(input.value);
    };
  }
}
