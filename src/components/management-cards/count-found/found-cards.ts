import Block from "../../../core/templates/block";


export class FoundCountCards extends Block {
  constructor(id: string, className: string) {
    super(id, className);
    document.addEventListener("DOMContentLoaded", FoundCountCards.countProduct);
  }

  render(): HTMLElement {
    this.container.innerHTML = `<h1>Found: <span id='found-count'>0</span></h1>`;
    return this.container;
  }

  static countProduct() {
    let result = 0;
        let found = document.getElementById('found-count');
        let count = document.querySelectorAll("#block-cards")[0].children.length;
        for (let i = 0; i < count; i++) {
          if(document.getElementById(`${i + 1}a`)?.style.display !== 'none') {
            result++;
          }
        }
        found!.innerText = `${result}`;
  }
}