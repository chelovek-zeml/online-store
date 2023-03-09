import Block from "../../../core/templates/block";
import { SortProductBtn } from "./sort-button";
import { SortContent } from "./sort-content";

export class SortProduct extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
    this.container.append(
      new SortProductBtn("btn-sort", "btn__sort", `Sort options: `).render()
    );
    this.container.append(
      new SortContent("sort-content", "sort__content").render()
    );
    return this.container;
  }
}
