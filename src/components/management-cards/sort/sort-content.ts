import Block from "../../../core/templates/block";

export class SortContent extends Block {
  constructor(id: string, className: string) {
    super(id, className);
    this.container.onclick = function (e) {
      let element = e.target as HTMLElement;
      switch (element.textContent) {
        case "Sort by price ASC":
          SortContent.sortProduct("data-price", true);
          break;
        case "Sort by price DESC":
          SortContent.sortProduct("data-price", false);
          break;
        case "Sort by rating ASC":
          SortContent.sortProduct("data-rating", true);
          break;
        case "Sort by rating DESC":
          SortContent.sortProduct("data-rating", false);
          break;
      }
    };
  }

  render(): HTMLElement {
    this.container.innerHTML = `<p>Sort by price ASC</p>
    <p>Sort by price DESC</p>
    <p>Sort by rating ASC</p>
    <p>Sort by rating DESC</p>`;
    return this.container;
  }

  static sortProduct(dataSort: string, flag: boolean) {
    let arrayProd = document.querySelectorAll("#block-cards")[0] as HTMLElement;
    for (let i = 0; i < arrayProd.children.length; i++) {
      for (let j = i; j < arrayProd.children.length; j++) {
        if (flag) {
          if (
            +arrayProd.children[i].getAttribute(dataSort)! >
            +arrayProd.children[j].getAttribute(dataSort)!
          ) {
            let replacedNode = arrayProd.replaceChild(
              arrayProd.children[j],
              arrayProd.children[i]
            );
            SortContent.insertAfter(replacedNode, arrayProd.children[i]);
          }
        } else {
          if (
            +arrayProd.children[i].getAttribute(dataSort)! <
            +arrayProd.children[j].getAttribute(dataSort)!
          ) {
            let replacedNode = arrayProd.replaceChild(
              arrayProd.children[j],
              arrayProd.children[i]
            );
            SortContent.insertAfter(replacedNode, arrayProd.children[i]);
          }
        }
      }
    }
  }

  // меняем местами элементы
  static insertAfter(el: Element, refElem: Element) {
    return refElem.parentNode?.insertBefore(el, refElem.nextSibling);
  }
}
