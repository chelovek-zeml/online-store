import Block from "../../core/templates/block";
import { SortProduct } from "./sort/sort";
import { FoundCountCards } from "./count-found/found-cards";

export class ManagementCards extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
    this.container.append(new SortProduct("sort", "sort__product").render());
    this.container.append(new FoundCountCards("found-product", "found__product").render());
    return this.container;
  }
}
