import Block from "../../core/templates/block";
import { SortProduct } from "./sort/sort";
import { FoundCountCards } from "./count-found/found-cards";
import { Search } from "./search/search";
import { ViewBlockCards } from "./view-block-cards/view-block-cards";

export class ManagementCards extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
    this.container.append(new SortProduct("sort", "sort__product").render());
    this.container.append(new FoundCountCards("found-product", "found__product").render());
    this.container.append(new Search().render());
    this.container.append(new ViewBlockCards().render());
    return this.container;
  }
}
