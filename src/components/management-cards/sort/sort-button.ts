import Button from "../../../core/templates/button";

export class SortProductBtn extends Button {
  constructor(id: string, className: string, name: string) {
    super(id, className, name);
    this.container.addEventListener("click", this.showModule);
    window.onclick = function (e) {
      let temp = e.target as HTMLElement;
      if (!temp.classList.contains("btn__sort")) {
        document.getElementById("sort-content")?.classList.remove("show");
        document.getElementById("btn-sort")?.classList.remove("btn_show");
      }
    };
  }

  render(): HTMLElement {
    return this.container;
  }

  showModule() {
    document.getElementById("sort-content")?.classList.toggle("show");
    document.getElementById("btn-sort")?.classList.toggle("btn_show");
  }
}
