export abstract class BaseSelectControl extends HTMLSelectElement {
  setOptions(...items: string[][]) {
    for (const [text, value] of items) {
      this.add(new Option(text.replace(/.svg/, ""), value));
    }
  }

  getSelectedOption() {
    return this.options[this.selectedIndex];
  }
}
