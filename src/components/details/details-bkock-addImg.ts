import Block from "../../core/templates/block";
import { AddImg } from "./details-addImg";
import products from '../../data.json';

export class DetailsBlockAddImg extends Block {
    constructor(id: string, className: string) {
      super(id, className);
    }

    render(i: number): HTMLElement {
      let arrSize = products[i].images.length;
      for (let j = 0; j < arrSize; j++) {
        this.container.append((new AddImg(`${j + 1}add-img`, 'add__img')).render(i, j));
      }
        return this.container;
      }
    }