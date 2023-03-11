import Block from "../../core/templates/block";
import CardImg from "../card-prduct/card-img";

class DetailsImg extends Block {
    constructor(id: string, className: string) {
      super(id, className);
    }

    render(i: number): HTMLElement {
        this.container.append((new CardImg('details-img', 'details__img')).render(i));
        return this.container;
      }
    }
    export default DetailsImg;
    