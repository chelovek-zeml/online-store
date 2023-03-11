import Block from "../../core/templates/block";
import products from '../../data.json';

export class TitleCard extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }
  // constructor() {
  //   super("card-title", "card__title");
  // }

  render(i: number) {
    this.container.innerHTML = `${products[i].title}`;
    return this.container;
  }
}