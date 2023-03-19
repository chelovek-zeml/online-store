import { FoundCountCards } from "../count-found/found-cards";

export class SearchInput {
  protected container: HTMLElement;
  constructor(id: string, className: string) {
    this.container = document.createElement("input");
    this.container.className = className;
    this.container.id = id;
    this.container.setAttribute("type", "text");
    this.container.setAttribute("placeholder", "Search...");
    this.container.setAttribute("autocomplete", "off");
    this.container.oninput = this.oninputInfo;
  }

  render() {
    return this.container;
  }

  oninputInfo() {
    let element = document.getElementById("search-input") as HTMLInputElement;
    let val = element!.value.toLowerCase();
    let count = document.querySelectorAll("#block-cards")[0].children.length;
    if (val != "") {
      for (let i = 0; i < count; i++) {
        let tempEl = document.getElementById(`${i + 1}a`);
        if (
          document
            .getElementById(`${i + 1}card-title`)
            ?.textContent?.toLowerCase()
            .search(val) == -1
        ) {
          tempEl!.style.display = "none";
        } else {
            tempEl!.style.display = "flex";
        }
      }
      FoundCountCards.countProduct();
    } else {
      for (let i = 0; i < count; i++) {
        let tempEl = document.getElementById(`${i + 1}a`);
        tempEl!.style.display = "flex";
      }
      FoundCountCards.countProduct();
    }
  }
}
