import Block from "../../../core/templates/block";

export class SortContent extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
    this.container.innerHTML = `<a>Sort by price ASC</a>
    <a>Sort by price DESC</a>
    <a>Sort by rating ASC</a>
    <a>Sort by rating DESC</a>`;
    return this.container;
  }
}
